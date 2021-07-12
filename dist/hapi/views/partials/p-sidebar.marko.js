// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/project$0.0.0/dist/hapi/views/partials/p-sidebar.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forIn = require("marko/src/runtime/helpers/for-in"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr");

function render(input, out, __component, component, state) {
  var data = input;

  'use strict';
  
  
  const user = out.global.user;
  const needle = out.global.page;
  
  const targets = {
    about: ['mandate', 'programs', 'mission', 'board', 'history', 'contact'],
    archives: ['search', 'results'],
    blog: ['news', 'reports', 'articles', 'columns'],
    classes: ['introduction', 'classes', 'instructors'],
    events: ['calendar', 'faq'],
    membership: ['benefits', 'fees', 'renewals', 'join'],
    ratings: ['introduction', 'adult', 'junior', 'senior', 'faq']
  };

  out.w("<div class=logo></div><nav class=menu><ul><li><a href=#banner>home</a></li>");

  if (user) {
    out.w("<li><a href=/user>user</a></li>");

    if (user.scope.includes("admin")) {
      out.w("<li><a href=/admin-members>admin</a></li>");
    }

    out.w("<li><a class=logout href=/logout>logout</a></li><li><a class=change href=/change>change password</a></li>");
  } else {
    out.w("<li><a class=login href=/login>login</a></li><li><a class=register href=/register>register</a></li><li><a class=reset href=/reset>reset password</a></li>");
  }

  out.w("</ul><ul>");

  var $for$0 = 0;

  marko_forIn(targets[needle], function(key, target) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<li><a" +
      marko_attr("href", "#" + target) +
      ">" +
      marko_escapeXml(target) +
      "</a></li>");
  });

  out.w("</ul></nav>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/project$0.0.0/dist/hapi/views/partials/p-sidebar.marko"
  };
