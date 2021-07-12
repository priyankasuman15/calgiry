// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/project$0.0.0/dist/hapi/views/components/c-title.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x;

function render(input, out, __component, component, state) {
  var data = input;

  'use strict';
  
  
  const needle = out.global.page;
  const metas = out.global.context.meta;
  
  
  function getTitle() {
  
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].page === needle) {
        return metas[i].title;
      }
    }
  
    return '';
  }
  
  const output = getTitle();

  out.w("<title>" +
    marko_escapeXml(output) +
    "</title>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/project$0.0.0/dist/hapi/views/components/c-title.marko"
  };
