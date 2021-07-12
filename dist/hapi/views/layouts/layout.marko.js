// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/project$0.0.0/dist/hapi/views/layouts/layout.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTemplate = require("marko/src/runtime/helpers/load-template"),
    c_title_template = marko_loadTemplate(require.resolve("../components/c-title.marko")),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    c_title_tag = marko_loadTag(c_title_template),
    c_description_template = marko_loadTemplate(require.resolve("../components/c-description.marko")),
    c_description_tag = marko_loadTag(c_description_template),
    p_header_template = marko_loadTemplate(require.resolve("../partials/p-header.marko")),
    p_header_tag = marko_loadTag(p_header_template),
    p_sidebar_template = marko_loadTemplate(require.resolve("../partials/p-sidebar.marko")),
    p_sidebar_tag = marko_loadTag(p_sidebar_template),
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag"),
    p_footer_template = marko_loadTemplate(require.resolve("../partials/p-footer.marko")),
    p_footer_tag = marko_loadTag(p_footer_template),
    p_sponsors_template = marko_loadTemplate(require.resolve("../partials/p-sponsors.marko")),
    p_sponsors_tag = marko_loadTag(p_sponsors_template),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html class=no-js lang=en><head><meta charset=utf-8><meta http-equiv=x-ua-compatible content=ie=edge><meta name=viewport content=\"width=device-width, initial-scale=1\">");

  c_title_tag({}, out, __component, "5");

  c_description_tag({}, out, __component, "6");

  out.w("<meta name=author lang=en content=calgarychess.com><meta name=dcterms.dateCopyrighted content=2020><link rel=apple-touch-icon href=apple-touch-icon.png><link rel=stylesheet href=./chesskit/css/master/chesskit-position.min.css><link rel=stylesheet href=./chesskit/css/master/chesskit-xtable.min.css><link rel=stylesheet href=./chesskit/css/master/chesskit-master.min.css><link rel=stylesheet href=./chesskit/css/master/chesskit-ui.min.css><link rel=stylesheet href=./css/styles.min.css></head><body><!--[if lt IE 11]><div class=\"message message__error\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</div><![endif]--><div class=progress></div><div class=overlay></div><div class=responsive><svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox=\"0 0 24 24\" fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><line x1=3 y1=12 x2=21 y2=12></line><line x1=3 y1=6 x2=21 y2=6></line><line x1=3 y1=18 x2=21 y2=18></line></svg></div><header id=banner>");

  p_header_tag({}, out, __component, "24");

  out.w("</header><div id=container class=container><aside id=sidebar class=sidebar>");

  p_sidebar_tag({}, out, __component, "27");

  out.w("</aside><main><section id=content>");

  if (input.body) {
    marko_dynamicTag(out, input.body, null, null, null, null, __component, "30");
  } else {
    out.w("DEFAULT BODY CONTENT");
  }

  out.w("</section><footer id=footer>");

  p_footer_tag({}, out, __component, "32");

  out.w("</footer></main><div class=sponsors>");

  p_sponsors_tag({}, out, __component, "34");

  out.w("</div></div><script src=./js/vendor/webfontloader-1.6.28.js></script><script src=./js/common/webfontloader.min.js></script><script src=./js/lib/lib.min.js></script><script src=./js/common/pwa.min.js></script><script src=./js/vendor/flatpickr-4.3.2.min.js></script><script src=./js/vendor/leaflet-1.4.0.min.js></script><script src=./js/common/flatpickr.min.js></script><script src=./js/common/leaflet.min.js></script><script src=./js/lib/sticky.min.js></script><script src=./chesskit/js/chesskit-xtable-0.0.1.min.js></script><script src=./chesskit/js/chesskit-xtable.min.js></script><script src=./chesskit/js/chesskit-ui-0.0.1.min.js></script><script src=./chesskit/js/chesskit-ui.min.js></script><script src=./js/common/position.min.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "35");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/project$0.0.0/dist/hapi/views/layouts/layout.marko",
    tags: [
      "../components/c-title.marko",
      "../components/c-description.marko",
      "../partials/p-header.marko",
      "../partials/p-sidebar.marko",
      "../partials/p-footer.marko",
      "../partials/p-sponsors.marko",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
