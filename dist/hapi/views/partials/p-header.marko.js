// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/project$0.0.0/dist/hapi/views/partials/p-header.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTemplate = require("marko/src/runtime/helpers/load-template"),
    p_navigation_template = marko_loadTemplate(require.resolve("./p-navigation.marko")),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    p_navigation_tag = marko_loadTag(p_navigation_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=alpha><div class=url>calgarychess.com</div><div class=title>Calgary Chess Club</div>");

  p_navigation_tag({}, out, __component, "3");

  out.w("<div></div><div class=url><a href=https://fide.com>fide.com</a><br><a href=http://chess.ca>chess.ca</a></div></div><div class=beta><div class=tagline><p>Our membership is made up of a diverse group of people numbering upwards of 2,000 adult, junior and senior players, male and female, who participate in activities from casual play all the way up to the professional world championship stage.</p><p>The club offers regular weekly meetings, lessons, and structured competitive events. We are a registered member of national and international chess governing bodies. We continually work towards improving the skill level of our members and raising the profile of the game in schools and the larger community.</p></div><div class=bling></div><div class=title>Your Move!</div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/project$0.0.0/dist/hapi/views/partials/p-header.marko",
    tags: [
      "./p-navigation.marko"
    ]
  };
