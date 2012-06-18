var glob = require("glob")
var _ = require("underscore");
var express = require('express');
var app = express.createServer();
var http = require('http');
var fs = require('fs-extra');
var AdmZip = require('./adm-zip');
var ChromeExtension = require("./crx")

app.configure(function() {
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use(express.static(__dirname + '/public'));
	app.use(app.router);
});
app.get("/", function(req, res) {
	res.send({});
});
app.post('/', function(req, res) {

	var request = require("request");
	console.log('starting request');
	//request('http://github.com/cdnjs/cdnjs/zipball/master', function() {
		console.log('finished request');
		var resources2;
		fs.removeSync('extension/cdnjs');
		fs.removeSync('scratch');
		fs.mkdirSync('extension');
		fs.mkdirSync('scratch');
		var zip = new AdmZip("./cdnjs.zip");
		zip.extractAllTo('scratch',  false);

		var cdnjsFolderZipName = fs.readdirSync('scratch')[0];
		fs.renameSync('scratch/' + cdnjsFolderZipName, 'extension/cdnjs');

		options = {};
		glob("extension/cdnjs/ajax/**/*.js", options, function(er, files) {
			resources2 = '[';
			_.each(files, function(filename) {
				resources2 += '"' + filename.replace('extension/', '') + '",';
			});
			resources2 = resources2.substr(0, resources2.length - 1);
			resources2 += ']';


			fs.readFile('extension/manifest.json', 'ascii', function(err, data) {

				if (err) {

					console.error("Could not open file: %s", err);

					process.exit(1);

				}
			var manifest = JSON.parse(data);
			console.log(manifest);
      manifest.version = manifest.version*1 + 0.01;
      manifest.web_accessible_resources = files;
      console.log(manifest);
				fs.writeFile("extension/manifest.json", JSON.stringify(manifest), function(err) {
					if (err) {
						console.log(err);
					} else {
						fs.copy('cdnjs.js', 'extension/cdnjs.js', function() {
							var crx = new ChromeExtension({
								privateKey: fs.readFileSync("key.pem"),
								rootDirectory: "extension",
								codebase: 'http://github.com/cdnjs/browser-extension'
							})
							console.log('compile crx');
							crx.load(function(err) {
								console.log(arguments, 'asd')
								if (err) throw err

								console.log(arguments, 'asd2')
								this.pack(function(err, data) {
									console.log(arguments);
									if (err) throw err

									  var updateXML = this.generateUpdateXML()

   								 fs.writeFile("public/update.xml", updateXML);
									fs.writeFile("public/cdnjs-local-loader.crx", data)
									console.log('done');

									//fs.removeSync('cdnjs.zip');
									//fs.removeSync('extension');
									this.destroy()
									res.send({});
								})
							})
						});
					}
				});
			});



		});



	//}).pipe(fs.createWriteStream('cdnjs.zip'))
});


app.listen(8000);



//console.log(files);
// files is an array of filenames.
// If the `nonull` option is set, and nothing
// was found, then files is ["**/*.js"]
// er is an error object or null.