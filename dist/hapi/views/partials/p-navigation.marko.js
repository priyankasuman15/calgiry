// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/project$0.0.0/dist/hapi/views/partials/p-navigation.marko",
    marko_renderer = require("marko/src/runtime/components/renderer");

function render(input, out, __component, component, state) {
  var data = input;

  'use strict';
  
  
  const user = out.global.user;
  const needle = out.global.page;

  out.w("<nav class=menu><ul><li><a href=/blog>blog</a></li><li><a href=/events>events</a></li><li><a href=/ratings>ratings</a></li><li><a href=/membership>membership</a></li><li><a href=/classes>classes</a></li><li><a href=/archives>archives</a></li><li><a href=/about>about</a></li></ul></nav>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/project$0.0.0/dist/hapi/views/partials/p-navigation.marko"
  };
