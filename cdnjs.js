var libraries = {
  cdn: ["cdnjs/ajax/libs/ICanHaz.js","cdnjs/ajax/libs/ICanHaz.js/0.10/ICanHaz.min.js","cdnjs/ajax/libs/ICanHaz.js/0.9/ICanHaz.min.js","cdnjs/ajax/libs/ace/0.2.0/ace.js","cdnjs/ajax/libs/ace/0.2.0/cockpit.js","cdnjs/ajax/libs/ace/0.2.0/keybinding-emacs.js","cdnjs/ajax/libs/ace/0.2.0/keybinding-vim.js","cdnjs/ajax/libs/ace/0.2.0/mode-c_cpp.js","cdnjs/ajax/libs/ace/0.2.0/mode-clojure.js","cdnjs/ajax/libs/ace/0.2.0/mode-coffee.js","cdnjs/ajax/libs/ace/0.2.0/mode-csharp.js","cdnjs/ajax/libs/ace/0.2.0/mode-css.js","cdnjs/ajax/libs/ace/0.2.0/mode-groovy.js","cdnjs/ajax/libs/ace/0.2.0/mode-html.js","cdnjs/ajax/libs/ace/0.2.0/mode-java.js","cdnjs/ajax/libs/ace/0.2.0/mode-javascript.js","cdnjs/ajax/libs/ace/0.2.0/mode-json.js","cdnjs/ajax/libs/ace/0.2.0/mode-ocaml.js","cdnjs/ajax/libs/ace/0.2.0/mode-perl.js","cdnjs/ajax/libs/ace/0.2.0/mode-php.js","cdnjs/ajax/libs/ace/0.2.0/mode-python.js","cdnjs/ajax/libs/ace/0.2.0/mode-ruby.js","cdnjs/ajax/libs/ace/0.2.0/mode-scad.js","cdnjs/ajax/libs/ace/0.2.0/mode-scala.js","cdnjs/ajax/libs/ace/0.2.0/mode-scss.js","cdnjs/ajax/libs/ace/0.2.0/mode-svg.js","cdnjs/ajax/libs/ace/0.2.0/mode-textile.js","cdnjs/ajax/libs/ace/0.2.0/mode-xml.js","cdnjs/ajax/libs/ace/0.2.0/theme-clouds.js","cdnjs/ajax/libs/ace/0.2.0/theme-clouds_midnight.js","cdnjs/ajax/libs/ace/0.2.0/theme-cobalt.js","cdnjs/ajax/libs/ace/0.2.0/theme-crimson_editor.js","cdnjs/ajax/libs/ace/0.2.0/theme-dawn.js","cdnjs/ajax/libs/ace/0.2.0/theme-eclipse.js","cdnjs/ajax/libs/ace/0.2.0/theme-idle_fingers.js","cdnjs/ajax/libs/ace/0.2.0/theme-kr_theme.js","cdnjs/ajax/libs/ace/0.2.0/theme-merbivore.js","cdnjs/ajax/libs/ace/0.2.0/theme-merbivore_soft.js","cdnjs/ajax/libs/ace/0.2.0/theme-mono_industrial.js","cdnjs/ajax/libs/ace/0.2.0/theme-monokai.js","cdnjs/ajax/libs/ace/0.2.0/theme-pastel_on_dark.js","cdnjs/ajax/libs/ace/0.2.0/theme-solarized_dark.js","cdnjs/ajax/libs/ace/0.2.0/theme-solarized_light.js","cdnjs/ajax/libs/ace/0.2.0/theme-textmate.js","cdnjs/ajax/libs/ace/0.2.0/theme-twilight.js","cdnjs/ajax/libs/ace/0.2.0/theme-vibrant_ink.js","cdnjs/ajax/libs/ace/0.2.0/worker-coffee.js","cdnjs/ajax/libs/ace/0.2.0/worker-css.js","cdnjs/ajax/libs/ace/0.2.0/worker-javascript.js","cdnjs/ajax/libs/angular.js","cdnjs/ajax/libs/angular.js/1.0.0rc6/angular-1.0.0rc6.min.js","cdnjs/ajax/libs/augment.js","cdnjs/ajax/libs/augment.js/0.3.0/augment.min.js","cdnjs/ajax/libs/augment.js/0.4.0/augment.min.js","cdnjs/ajax/libs/backbone-localstorage.js","cdnjs/ajax/libs/backbone-localstorage.js/1.0/backbone.localStorage-min.js","cdnjs/ajax/libs/backbone.js","cdnjs/ajax/libs/backbone.js/0.3.3/backbone-min.js","cdnjs/ajax/libs/backbone.js/0.5.0/backbone-min.js","cdnjs/ajax/libs/backbone.js/0.5.1/backbone-min.js","cdnjs/ajax/libs/backbone.js/0.5.2/backbone-min.js","cdnjs/ajax/libs/backbone.js/0.5.3/backbone-min.js","cdnjs/ajax/libs/backbone.js/0.5/backbone-min.js","cdnjs/ajax/libs/backbone.js/0.9.0/backbone-min.js","cdnjs/ajax/libs/backbone.js/0.9.1-amdjs/backbone-amd-min.js","cdnjs/ajax/libs/backbone.js/0.9.1/backbone-min.js","cdnjs/ajax/libs/backbone.js/0.9.2-amdjs/backbone-min.js","cdnjs/ajax/libs/backbone.js/0.9.2/backbone-min.js","cdnjs/ajax/libs/backbone.modelbinder/0.1.3/Backbone.ModelBinder-min.js","cdnjs/ajax/libs/benchmark/0.3.0/benchmark.js","cdnjs/ajax/libs/benchmark/0.3.0/benchmark.min.js","cdnjs/ajax/libs/camanjs/2.0/caman.full.min.js","cdnjs/ajax/libs/camanjs/2.1.1/caman.full.min.js","cdnjs/ajax/libs/camanjs/2.1.3/caman.full.min.js","cdnjs/ajax/libs/camanjs/2.1/caman.full.min.js","cdnjs/ajax/libs/camanjs/2.2/caman.full.min.js","cdnjs/ajax/libs/camanjs/3.1.0/caman.full.min.js","cdnjs/ajax/libs/camanjs/3.1.1/caman.full.min.js","cdnjs/ajax/libs/chrome-frame/1.0.2/CFInstall.min.js","cdnjs/ajax/libs/coffee-script/1.1.2/coffee-script.min.js","cdnjs/ajax/libs/coffee-script/1.2.0/coffee-script.min.js","cdnjs/ajax/libs/coffee-script/1.3.1/coffee-script.min.js","cdnjs/ajax/libs/css3finalize/1.37/jquery.css3finalize.min.js","cdnjs/ajax/libs/css3finalize/1.39/jquery.css3finalize.min.js","cdnjs/ajax/libs/css3finalize/1.40/jquery.css3finalize.min.js","cdnjs/ajax/libs/css3finalize/1.43/jquery.css3finalize.min.js","cdnjs/ajax/libs/css3finalize/1.45/jquery.css3finalize.min.js","cdnjs/ajax/libs/css3finalize/2.0/jquery.css3finalize.min.js","cdnjs/ajax/libs/css3finalize/2.1/jquery.css3finalize.min.js","cdnjs/ajax/libs/css3finalize/2.4/jquery.css3finalize.min.js","cdnjs/ajax/libs/css3pie/1.0.0/PIE.js","cdnjs/ajax/libs/css3pie/1.0beta5/PIE.js","cdnjs/ajax/libs/css3pie/1.0beta5/PIE_uncompressed.js","cdnjs/ajax/libs/cufon/1.09i/cufon-yui.js","cdnjs/ajax/libs/d3/2.7.4/d3.chart.min.js","cdnjs/ajax/libs/d3/2.7.4/d3.csv.min.js","cdnjs/ajax/libs/d3/2.7.4/d3.geo.min.js","cdnjs/ajax/libs/d3/2.7.4/d3.geom.min.js","cdnjs/ajax/libs/d3/2.7.4/d3.layout.min.js","cdnjs/ajax/libs/d3/2.7.4/d3.min.js","cdnjs/ajax/libs/d3/2.7.4/d3.time.min.js","cdnjs/ajax/libs/d3/2.8.1/d3.v2.min.js","cdnjs/ajax/libs/datejs/1.0/date.min.js","cdnjs/ajax/libs/davis.js","cdnjs/ajax/libs/davis.js/0.5.1/davis.min.js","cdnjs/ajax/libs/davis.js/0.7.0/davis.min.js","cdnjs/ajax/libs/dd_belatedpng/0.0.8/dd_belatedpng.min.js","cdnjs/ajax/libs/documentup/0.1.0/documentup.js","cdnjs/ajax/libs/documentup/0.1.0/documentup.min.js","cdnjs/ajax/libs/documentup/0.1.1/documentup.js","cdnjs/ajax/libs/documentup/0.1.1/documentup.min.js","cdnjs/ajax/libs/documentup/latest.js","cdnjs/ajax/libs/documentup/latest.min.js","cdnjs/ajax/libs/dojo/1.6.0/dojo.xd.js","cdnjs/ajax/libs/dygraph/1.2/dygraph-combined.js","cdnjs/ajax/libs/ember.js","cdnjs/ajax/libs/ember.js/0.9.4/ember-0.9.4.min.js","cdnjs/ajax/libs/ember.js/0.9.5/ember-0.9.5.min.js","cdnjs/ajax/libs/ember.js/0.9.6/ember-0.9.6.min.js","cdnjs/ajax/libs/ember.js/0.9.7.1/ember-0.9.7.1.min.js","cdnjs/ajax/libs/ember.js/0.9.7/ember-0.9.7.min.js","cdnjs/ajax/libs/ember.js/0.9.8.1/ember-0.9.8.1.js","cdnjs/ajax/libs/ember.js/0.9.8.1/ember-0.9.8.1.min.js","cdnjs/ajax/libs/ember.js/0.9.8/ember-0.9.8.js","cdnjs/ajax/libs/ember.js/0.9.8/ember-0.9.8.min.js","cdnjs/ajax/libs/es5-shim/0.0.4/es5-shim.min.js","cdnjs/ajax/libs/es5-shim/1.2.4/es5-shim.min.js","cdnjs/ajax/libs/ext-core/3.1.0/ext-core.js","cdnjs/ajax/libs/fancybox/1.3.4/jquery.fancybox-1.3.4.pack.js","cdnjs/ajax/libs/fancybox/2.0.4/jquery.fancybox.pack.js","cdnjs/ajax/libs/fancybox/2.0.5/jquery.fancybox.pack.js","cdnjs/ajax/libs/fancybox/2.0.6/jquery.fancybox.pack.js","cdnjs/ajax/libs/flexie/1.0.0/flexie.min.js","cdnjs/ajax/libs/flot/0.7/excanvas.min.js","cdnjs/ajax/libs/flot/0.7/jquery.colorhelpers.min.js","cdnjs/ajax/libs/flot/0.7/jquery.flot.crosshair.min.js","cdnjs/ajax/libs/flot/0.7/jquery.flot.fillbetween.min.js","cdnjs/ajax/libs/flot/0.7/jquery.flot.image.min.js","cdnjs/ajax/libs/flot/0.7/jquery.flot.min.js","cdnjs/ajax/libs/flot/0.7/jquery.flot.navigate.min.js","cdnjs/ajax/libs/flot/0.7/jquery.flot.pie.min.js","cdnjs/ajax/libs/flot/0.7/jquery.flot.resize.min.js","cdnjs/ajax/libs/flot/0.7/jquery.flot.selection.min.js","cdnjs/ajax/libs/flot/0.7/jquery.flot.stack.min.js","cdnjs/ajax/libs/flot/0.7/jquery.flot.symbol.min.js","cdnjs/ajax/libs/flot/0.7/jquery.flot.threshold.min.js","cdnjs/ajax/libs/galleria/1.2.3/galleria.min.js","cdnjs/ajax/libs/galleria/1.2.6/galleria.min.js","cdnjs/ajax/libs/graphael/0.4.1/g.bar-min.js","cdnjs/ajax/libs/graphael/0.4.1/g.dot-min.js","cdnjs/ajax/libs/graphael/0.4.1/g.line-min.js","cdnjs/ajax/libs/graphael/0.4.1/g.pie-min.js","cdnjs/ajax/libs/graphael/0.4.1/g.raphael-min.js","cdnjs/ajax/libs/graphael/0.5.0/g.bar-min.js","cdnjs/ajax/libs/graphael/0.5.0/g.dot-min.js","cdnjs/ajax/libs/graphael/0.5.0/g.line-min.js","cdnjs/ajax/libs/graphael/0.5.0/g.pie-min.js","cdnjs/ajax/libs/graphael/0.5.0/g.raphael-min.js","cdnjs/ajax/libs/handlebars.js","cdnjs/ajax/libs/handlebars.js/1.0.0.beta2/handlebars.min.js","cdnjs/ajax/libs/handlebars.js/1.0.0.beta6/handlebars.min.js","cdnjs/ajax/libs/hashgrid/6/hashgrid.js","cdnjs/ajax/libs/headjs/0.9/head.load.min.js","cdnjs/ajax/libs/headjs/0.9/head.min.js","cdnjs/ajax/libs/headjs/0.96/head.load.min.js","cdnjs/ajax/libs/headjs/0.96/head.min.js","cdnjs/ajax/libs/highcharts/2.1.5/highcharts.js","cdnjs/ajax/libs/highcharts/2.1.6/highcharts.js","cdnjs/ajax/libs/highcharts/2.2.0/highcharts.js","cdnjs/ajax/libs/highcharts/2.2.1/highcharts.js","cdnjs/ajax/libs/highcharts/2.2.2/highcharts.js","cdnjs/ajax/libs/highcharts/2.2.2/modules/exporting.js","cdnjs/ajax/libs/highcharts/2.2.3/highcharts.js","cdnjs/ajax/libs/highcharts/2.2.3/modules/exporting.js","cdnjs/ajax/libs/highcharts/2.2.4/highcharts.js","cdnjs/ajax/libs/highcharts/2.2.4/modules/exporting.js","cdnjs/ajax/libs/history.js","cdnjs/ajax/libs/history.js/1.7.1/bundled/html4+html5/jquery.history.js","cdnjs/ajax/libs/history.js/1.7.1/bundled/html4+html5/mootools.history.js","cdnjs/ajax/libs/history.js/1.7.1/bundled/html4+html5/native.history.js","cdnjs/ajax/libs/history.js/1.7.1/bundled/html4+html5/right.history.js","cdnjs/ajax/libs/history.js/1.7.1/bundled/html4+html5/zepto.history.js","cdnjs/ajax/libs/history.js/1.7.1/bundled/html5/jquery.history.js","cdnjs/ajax/libs/history.js/1.7.1/bundled/html5/mootools.history.js","cdnjs/ajax/libs/history.js/1.7.1/bundled/html5/native.history.js","cdnjs/ajax/libs/history.js/1.7.1/bundled/html5/right.history.js","cdnjs/ajax/libs/history.js/1.7.1/bundled/html5/zepto.history.js","cdnjs/ajax/libs/history.js/1.7.1/native.history.js","cdnjs/ajax/libs/hogan.js","cdnjs/ajax/libs/hogan.js/2.0.0/hogan.js","cdnjs/ajax/libs/html5shiv/3.6/html5shiv.min.js","cdnjs/ajax/libs/html5shiv/r23/html5.js","cdnjs/ajax/libs/html5shiv/r29/html5.js","cdnjs/ajax/libs/javascript-state-machine/2.0.0/state-machine.min.js","cdnjs/ajax/libs/jo/0.4.1/jo.min.js","cdnjs/ajax/libs/jquery-easing/1.3/jquery.easing.min.js","cdnjs/ajax/libs/jquery-gamequery/0.6.2/jquery.gamequery.min.js","cdnjs/ajax/libs/jquery-history/1.9/jquery.history.js","cdnjs/ajax/libs/jquery-infinitescroll/2.0b2.110713/jquery.infinitescroll.min.js","cdnjs/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js","cdnjs/ajax/libs/jquery-scrollTo/1.4.2/jquery.scrollTo.min.js","cdnjs/ajax/libs/jquery-throttle-debounce/1.1/jquery.ba-throttle-debounce.min.js","cdnjs/ajax/libs/jquery-timeago/0.9.3/jquery.timeago.js","cdnjs/ajax/libs/jquery-tools/1.2.6/jquery.tools.min.js","cdnjs/ajax/libs/jquery.SPServices/0.5.8/jquery.SPServices-0.5.8.min.js","cdnjs/ajax/libs/jquery.SPServices/0.6.0/jquery.SPServices-0.6.0.min.js","cdnjs/ajax/libs/jquery.SPServices/0.6.1/jquery.SPServices-0.6.1.min.js","cdnjs/ajax/libs/jquery.SPServices/0.6.2/jquery.SPServices-0.6.2.min.js","cdnjs/ajax/libs/jquery.SPServices/0.7.0/jquery.SPServices-0.7.0.min.js","cdnjs/ajax/libs/jquery.SPServices/0.7.1a/jquery.SPServices-0.7.1a.min.js","cdnjs/ajax/libs/jquery.cycle/2.99/jquery.cycle.all.min.js","cdnjs/ajax/libs/jquery.cycle/2.99/jquery.cycle.lite.min.js","cdnjs/ajax/libs/jquery.cycle/2.99/jquery.cycle.min.js","cdnjs/ajax/libs/jquery.formalize/1.2/jquery.formalize.min.js","cdnjs/ajax/libs/jquery.transit/0.1.3/jquery.transit.min.js","cdnjs/ajax/libs/jquery/1.6.1/jquery.min.js","cdnjs/ajax/libs/jquery/1.6.2/jquery.min.js","cdnjs/ajax/libs/jquery/1.6.4/jquery.min.js","cdnjs/ajax/libs/jquery/1.7.1/jquery.min.js","cdnjs/ajax/libs/jquery/1.7.2/jquery.min.js","cdnjs/ajax/libs/jquery/1.7/jquery.min.js","cdnjs/ajax/libs/jqueryui-touch-punch/0.2.2/jquery.ui.touch-punch.min.js","cdnjs/ajax/libs/jqueryui/1.8.13/jquery-ui.min.js","cdnjs/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js","cdnjs/ajax/libs/jqueryui/1.8.17/jquery-ui.min.js","cdnjs/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js","cdnjs/ajax/libs/jqueryui/1.8.19/jquery-ui.min.js","cdnjs/ajax/libs/js-signals/0.5.3/js-signals.min.js","cdnjs/ajax/libs/js-signals/0.6.1/js-signals.min.js","cdnjs/ajax/libs/js-signals/0.6/js-signals.min.js","cdnjs/ajax/libs/json2/20110223/json2.js","cdnjs/ajax/libs/json2/20110223/json2.min.js","cdnjs/ajax/libs/json3/3.1.0/json3.js","cdnjs/ajax/libs/json3/3.1.0/json3.min.js","cdnjs/ajax/libs/json3/3.2.0/json3.js","cdnjs/ajax/libs/json3/3.2.0/json3.min.js","cdnjs/ajax/libs/json3/3.2.1/json3.js","cdnjs/ajax/libs/json3/3.2.1/json3.min.js","cdnjs/ajax/libs/json3/3.2.2/json3.js","cdnjs/ajax/libs/json3/3.2.2/json3.min.js","cdnjs/ajax/libs/jsxgraph/0.91/jsxgraphcore.js","cdnjs/ajax/libs/jsxgraph/0.92/jsxgraphcore.js","cdnjs/ajax/libs/jsxgraph/0.93/GeogebraReader.js","cdnjs/ajax/libs/jsxgraph/0.93/GeonextReader.js","cdnjs/ajax/libs/jsxgraph/0.93/IntergeoReader.js","cdnjs/ajax/libs/jsxgraph/0.93/jsxgraphcore.js","cdnjs/ajax/libs/jsxgraph/0.94/CinderellaReader.min.js","cdnjs/ajax/libs/jsxgraph/0.94/GeogebraReader.min.js","cdnjs/ajax/libs/jsxgraph/0.94/GeonextReader.min.js","cdnjs/ajax/libs/jsxgraph/0.94/IntergeoReader.min.js","cdnjs/ajax/libs/jsxgraph/0.94/jsxgraphcore.js","cdnjs/ajax/libs/kerning.js","cdnjs/ajax/libs/kerning.js/0.2/kerning.min.js","cdnjs/ajax/libs/knockout/1.2.1/knockout-min.js","cdnjs/ajax/libs/knockout/2.0.0/knockout-min.js","cdnjs/ajax/libs/labjs/1.2.0/LAB.min.js","cdnjs/ajax/libs/labjs/2.0.3/LAB-debug.min.js","cdnjs/ajax/libs/labjs/2.0.3/LAB.min.js","cdnjs/ajax/libs/labjs/2.0/LAB.min.js","cdnjs/ajax/libs/less.js","cdnjs/ajax/libs/less.js/1.0.41/less-1.0.41.min.js","cdnjs/ajax/libs/less.js/1.1.3/less-1.1.3.min.js","cdnjs/ajax/libs/less.js/1.1.5/less-1.1.5.min.js","cdnjs/ajax/libs/less.js/1.2.1/less-1.2.1.min.js","cdnjs/ajax/libs/less.js/1.3.0/less-1.3.0.min.js","cdnjs/ajax/libs/lodash.js","cdnjs/ajax/libs/lodash.js/0.1.0/lodash.js","cdnjs/ajax/libs/lodash.js/0.1.0/lodash.min.js","cdnjs/ajax/libs/lodash.js/0.2.0/lodash.js","cdnjs/ajax/libs/lodash.js/0.2.0/lodash.min.js","cdnjs/ajax/libs/lodash.js/0.2.1/lodash.js","cdnjs/ajax/libs/lodash.js/0.2.1/lodash.min.js","cdnjs/ajax/libs/lodash.js/0.2.2/lodash.js","cdnjs/ajax/libs/lodash.js/0.2.2/lodash.min.js","cdnjs/ajax/libs/lodash.js/0.3.0/lodash.js","cdnjs/ajax/libs/lodash.js/0.3.0/lodash.min.js","cdnjs/ajax/libs/lodash.js/0.3.1/lodash.js","cdnjs/ajax/libs/lodash.js/0.3.1/lodash.min.js","cdnjs/ajax/libs/lodash.js/0.3.2/lodash.js","cdnjs/ajax/libs/lodash.js/0.3.2/lodash.min.js","cdnjs/ajax/libs/masonry/2.1.0/jquery.masonry.min.js","cdnjs/ajax/libs/masonry/2.1.04/jquery.masonry.min.js","cdnjs/ajax/libs/mobilizejs/0.9/mobilize.min.js","cdnjs/ajax/libs/modernizr/1.7/modernizr-1.7.min.js","cdnjs/ajax/libs/modernizr/2.0.4/modernizr.min.js","cdnjs/ajax/libs/modernizr/2.0.6/modernizr.min.js","cdnjs/ajax/libs/modernizr/2.5.3/modernizr.min.js","cdnjs/ajax/libs/mootools/1.3.2/mootools-yui-compressed.js","cdnjs/ajax/libs/morris.js","cdnjs/ajax/libs/morris.js/0.2.9/morris.min.js","cdnjs/ajax/libs/mustache.js","cdnjs/ajax/libs/mustache.js/0.3.0/mustache.min.js","cdnjs/ajax/libs/mustache.js/0.4.2/mustache.min.js","cdnjs/ajax/libs/mustache.js/0.5.0-dev/mustache.js","cdnjs/ajax/libs/mustache.js/0.5.0-dev/mustache.min.js","cdnjs/ajax/libs/ninjaui/1.0.0/jquery.ninjaui.min.js","cdnjs/ajax/libs/ninjaui/1.0.1/jquery.ninjaui.min.js","cdnjs/ajax/libs/noisy/1.0/jquery.noisy.min.js","cdnjs/ajax/libs/noisy/1.1/jquery.noisy.min.js","cdnjs/ajax/libs/ocanvas/1.0/ocanvas.min.js","cdnjs/ajax/libs/ocanvas/2.0.0/ocanvas.min.js","cdnjs/ajax/libs/ocanvas/2.1.0/ocanvas.min.js","cdnjs/ajax/libs/ocanvas/2.1.1/ocanvas.min.js","cdnjs/ajax/libs/openajax-hub/2.0.7/OpenAjaxUnmanagedHub.min.js","cdnjs/ajax/libs/openlayers/2.11/OpenLayers.js","cdnjs/ajax/libs/pagedown/1.0/Markdown.Converter.js","cdnjs/ajax/libs/pagedown/1.0/Markdown.Editor.js","cdnjs/ajax/libs/pagedown/1.0/Markdown.Sanitizer.js","cdnjs/ajax/libs/paper.js","cdnjs/ajax/libs/paper.js/0.22/paper.js","cdnjs/ajax/libs/path.js","cdnjs/ajax/libs/path.js/0.8.4/path.js","cdnjs/ajax/libs/path.js/0.8.4/path.min.js","cdnjs/ajax/libs/pie/1.0beta5/PIE.js","cdnjs/ajax/libs/platform/0.4.0/platform.js","cdnjs/ajax/libs/platform/0.4.0/platform.min.js","cdnjs/ajax/libs/prettify/188.0.0/lang-apollo.js","cdnjs/ajax/libs/prettify/188.0.0/lang-clj.js","cdnjs/ajax/libs/prettify/188.0.0/lang-css.js","cdnjs/ajax/libs/prettify/188.0.0/lang-go.js","cdnjs/ajax/libs/prettify/188.0.0/lang-hs.js","cdnjs/ajax/libs/prettify/188.0.0/lang-lisp.js","cdnjs/ajax/libs/prettify/188.0.0/lang-lua.js","cdnjs/ajax/libs/prettify/188.0.0/lang-ml.js","cdnjs/ajax/libs/prettify/188.0.0/lang-n.js","cdnjs/ajax/libs/prettify/188.0.0/lang-proto.js","cdnjs/ajax/libs/prettify/188.0.0/lang-scala.js","cdnjs/ajax/libs/prettify/188.0.0/lang-sql.js","cdnjs/ajax/libs/prettify/188.0.0/lang-tex.js","cdnjs/ajax/libs/prettify/188.0.0/lang-vb.js","cdnjs/ajax/libs/prettify/188.0.0/lang-vhdl.js","cdnjs/ajax/libs/prettify/188.0.0/lang-wiki.js","cdnjs/ajax/libs/prettify/188.0.0/lang-xq.js","cdnjs/ajax/libs/prettify/188.0.0/lang-yaml.js","cdnjs/ajax/libs/prettify/188.0.0/prettify.js","cdnjs/ajax/libs/processing.js","cdnjs/ajax/libs/processing.js/1.2.1/processing-api.min.js","cdnjs/ajax/libs/processing.js/1.2.1/processing.min.js","cdnjs/ajax/libs/processing.js/1.2.3/processing-api.min.js","cdnjs/ajax/libs/processing.js/1.2.3/processing.min.js","cdnjs/ajax/libs/processing.js/1.3.6/processing-api.min.js","cdnjs/ajax/libs/processing.js/1.3.6/processing.min.js","cdnjs/ajax/libs/prototype/1.7.0.0/prototype.js","cdnjs/ajax/libs/pubnub/3.1.2/pubnub.min.js","cdnjs/ajax/libs/punycode/1.0.0/punycode.js","cdnjs/ajax/libs/punycode/1.0.0/punycode.min.js","cdnjs/ajax/libs/raphael/1.5.2/raphael-min.js","cdnjs/ajax/libs/raphael/2.0.0/raphael-min.js","cdnjs/ajax/libs/raphael/2.0.1/raphael-min.js","cdnjs/ajax/libs/raphael/2.1.0/raphael-min.js","cdnjs/ajax/libs/require-jquery/0.23.0/require.min.js","cdnjs/ajax/libs/require-jquery/0.24.0/require.min.js","cdnjs/ajax/libs/require.js","cdnjs/ajax/libs/require.js/0.23.0/require.min.js","cdnjs/ajax/libs/require.js/0.24.0/require.min.js","cdnjs/ajax/libs/require.js/0.26.0/require.min.js","cdnjs/ajax/libs/require.js/0.27.1/require.min.js","cdnjs/ajax/libs/require.js/1.0.1/require.min.js","cdnjs/ajax/libs/require.js/1.0.2/require.min.js","cdnjs/ajax/libs/require.js/1.0.5/require.min.js","cdnjs/ajax/libs/require.js/1.0.7/require.min.js","cdnjs/ajax/libs/require.js/1.0.8/require.js","cdnjs/ajax/libs/require.js/1.0.8/require.min.js","cdnjs/ajax/libs/respond.js","cdnjs/ajax/libs/respond.js/1.1.0/respond.min.js","cdnjs/ajax/libs/retina.js","cdnjs/ajax/libs/retina.js/1.0.1/retina.js","cdnjs/ajax/libs/sammy.js","cdnjs/ajax/libs/sammy.js/0.6.3/sammy.min.js","cdnjs/ajax/libs/sammy.js/0.7.0/sammy.min.js","cdnjs/ajax/libs/sammy.js/0.7.0/sammy.push_location_proxy.min.js","cdnjs/ajax/libs/sammy.js/0.7.1/sammy.min.js","cdnjs/ajax/libs/script.js","cdnjs/ajax/libs/script.js/1.1/script.min.js","cdnjs/ajax/libs/script.js/1.3/script.min.js","cdnjs/ajax/libs/scriptaculous/1.8.3/scriptaculous.js","cdnjs/ajax/libs/selectivizr/1.0.2/selectivizr-min.js","cdnjs/ajax/libs/shred/0.7.12/shred.bundle.min.js","cdnjs/ajax/libs/sizzle/1.4.4/sizzle.min.js","cdnjs/ajax/libs/socket.io/0.6.2/socket.io.min.js","cdnjs/ajax/libs/socket.io/0.7.0/socket.io.min.js","cdnjs/ajax/libs/socket.io/0.8.2/socket.io.min.js","cdnjs/ajax/libs/socket.io/0.8.4/socket.io.min.js","cdnjs/ajax/libs/socket.io/0.9.5/socket.io.min.js","cdnjs/ajax/libs/sockjs-client/0.2.1/sockjs-min.js","cdnjs/ajax/libs/sopa/1.0/stopcensorship.js","cdnjs/ajax/libs/spin.js","cdnjs/ajax/libs/spin.js/1.2.4/spin.min.js","cdnjs/ajax/libs/spinejs/0.0.4/spine.min.js","cdnjs/ajax/libs/store.js","cdnjs/ajax/libs/store.js/1.1.1/store.min.js","cdnjs/ajax/libs/string_score/0.1.10/string_score.min.js","cdnjs/ajax/libs/swfobject/2.2/swfobject.js","cdnjs/ajax/libs/sylvester/0.1.3/sylvester.js","cdnjs/ajax/libs/three.js","cdnjs/ajax/libs/three.js/r49/Three.js","cdnjs/ajax/libs/tinyscrollbar/1.66/jquery.tinyscrollbar.min.js","cdnjs/ajax/libs/twitter-bootstrap/2.0.0/bootstrap.min.js","cdnjs/ajax/libs/twitter-bootstrap/2.0.1/bootstrap.min.js","cdnjs/ajax/libs/twitter-bootstrap/2.0.2/bootstrap.min.js","cdnjs/ajax/libs/twitter-bootstrap/2.0.3/bootstrap.min.js","cdnjs/ajax/libs/twitterlib.js","cdnjs/ajax/libs/twitterlib.js/0.9.0/twitterlib.min.js","cdnjs/ajax/libs/twitterlib.js/1.0.8/twitterlib.min.js","cdnjs/ajax/libs/underscore.js","cdnjs/ajax/libs/underscore.js/1.1.4/underscore-min.js","cdnjs/ajax/libs/underscore.js/1.1.5/underscore-min.js","cdnjs/ajax/libs/underscore.js/1.1.6/underscore-min.js","cdnjs/ajax/libs/underscore.js/1.1.7/underscore-min.js","cdnjs/ajax/libs/underscore.js/1.2.1/underscore-min.js","cdnjs/ajax/libs/underscore.js/1.2.2/underscore-min.js","cdnjs/ajax/libs/underscore.js/1.2.3/underscore-min.js","cdnjs/ajax/libs/underscore.js/1.2.4/underscore-min.js","cdnjs/ajax/libs/underscore.js/1.3.0/underscore-min.js","cdnjs/ajax/libs/underscore.js/1.3.1-amdjs/underscore-amd-min.js","cdnjs/ajax/libs/underscore.js/1.3.1/underscore-min.js","cdnjs/ajax/libs/underscore.js/1.3.2/underscore-min.js","cdnjs/ajax/libs/underscore.js/1.3.3/underscore-min.js","cdnjs/ajax/libs/underscore.string/1.1.3/underscore.string.min.js","cdnjs/ajax/libs/underscore.string/1.1.4/underscore.string.min.js","cdnjs/ajax/libs/underscore.string/1.1.6/underscore.string.min.js","cdnjs/ajax/libs/underscore.string/2.0.0/underscore.string.min.js","cdnjs/ajax/libs/use.js","cdnjs/ajax/libs/use.js/0.2.0/use.js","cdnjs/ajax/libs/visibility.js","cdnjs/ajax/libs/visibility.js/0.2/visibility.min.js","cdnjs/ajax/libs/waypoints/1.0.2/waypoints.min.js","cdnjs/ajax/libs/waypoints/1.0/waypoints.min.js","cdnjs/ajax/libs/waypoints/1.1.6/waypoints.min.js","cdnjs/ajax/libs/waypoints/1.1/waypoints.min.js","cdnjs/ajax/libs/webfont/1.0.19/webfont.js","cdnjs/ajax/libs/xregexp/2.0.0/backcompat.js","cdnjs/ajax/libs/xregexp/2.0.0/build.js","cdnjs/ajax/libs/xregexp/2.0.0/matchrecursive.js","cdnjs/ajax/libs/xregexp/2.0.0/prototypes.js","cdnjs/ajax/libs/xregexp/2.0.0/unicode-base.js","cdnjs/ajax/libs/xregexp/2.0.0/unicode-blocks.js","cdnjs/ajax/libs/xregexp/2.0.0/unicode-categories.js","cdnjs/ajax/libs/xregexp/2.0.0/unicode-properties.js","cdnjs/ajax/libs/xregexp/2.0.0/unicode-scripts.js","cdnjs/ajax/libs/xregexp/2.0.0/xregexp-all-min.js","cdnjs/ajax/libs/xregexp/2.0.0/xregexp-all.js","cdnjs/ajax/libs/xregexp/2.0.0/xregexp-min.js","cdnjs/ajax/libs/xregexp/2.0.0/xregexp.js","cdnjs/ajax/libs/xuijs/2.0.0/xui.min.js","cdnjs/ajax/libs/xuijs/2.3.2/xui.min.js","cdnjs/ajax/libs/yepnope/0.2.3/yepnope.min.js","cdnjs/ajax/libs/yepnope/1.0.1/yepnope.min.js","cdnjs/ajax/libs/yui/3.3.0/yui-min.js","cdnjs/ajax/libs/zepto/0.6/zepto.min.js","cdnjs/ajax/libs/zepto/0.7/zepto.min.js","cdnjs/ajax/libs/zepto/0.8/zepto.min.js","cdnjs/ajax/libs/zepto/1.0rc1/zepto.min.js","cdnjs/ajax/libs/zxcvbn/1.0/zxcvbn-async.js","cdnjs/ajax/libs/zxcvbn/1.0/zxcvbn.js"]
};
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if(details.url.indexOf('http:\/\/cdnjs.cloudflare.com\/') !== -1 ) {
      var url = details.url.replace('http:\/\/cdnjs.cloudflare.com\/', '');
     
      url = chrome.extension.getURL('cdnjs/' + url);
 
      return {redirectUrl: url};
     } else if(details.url.indexOf('http:\/\/ajax.googleapis.com\/') !== -1) {
        var url = 'cdnjs/' + details.url.replace('http:\/\/ajax.googleapis.com\/', '');
        if(libraries.cdn.indexOf(url) !== -1) {
          url = chrome.extension.getURL(url);
          return {redirectUrl: url};
        } else {
          return {};
        }
    
    } else {
      return {};
    }
  },
  {urls: ["*://*/*"]},
  ['blocking']);