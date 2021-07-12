// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/project$0.0.0/dist/hapi/views/partials/p-footer.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTemplate = require("marko/src/runtime/helpers/load-template"),
    p_address_template = marko_loadTemplate(require.resolve("./p-address.marko")),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    p_address_tag = marko_loadTag(p_address_template),
    c_leaflet_template = marko_loadTemplate(require.resolve("../components/c-leaflet.marko")),
    c_leaflet_tag = marko_loadTag(c_leaflet_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"grid grid--fit grid--gutters-none\"><div class=grid__cell>");

  p_address_tag({}, out, __component, "2");

  out.w("<p>&copy; 2020 Calgary Chess Club</p></div><div class=grid__cell>");

  c_leaflet_tag({}, out, __component, "5");

  out.w("</div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/project$0.0.0/dist/hapi/views/partials/p-footer.marko",
    tags: [
      "./p-address.marko",
      "../components/c-leaflet.marko"
    ]
  };
