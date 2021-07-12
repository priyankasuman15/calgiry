// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/project$0.0.0/dist/hapi/views/partials/p-address.marko",
    marko_renderer = require("marko/src/runtime/components/renderer");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<address><span class=\"icon svg-icon svg-baseline\"><svg xmlns=http://www.w3.org/2000/svg class=i-navigation width=24 height=24 viewBox=\"0 0 24 24\"><path fill=none stroke=currentcolor stroke-linejoin=round stroke-width=2 d=\"M3 11l19-9-9 19-2-8-8-2z\"></path></svg></span>#274 - 3359 27th Street NE<br>Calgary, AB<br>T1Y 5E4<br>Canada<br></address>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/project$0.0.0/dist/hapi/views/partials/p-address.marko"
  };
