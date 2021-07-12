// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/project$0.0.0/dist/hapi/views/components/c-events.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr");

function render(input, out, __component, component, state) {
  var data = input;

  'use strict';
  
  
  const needle = out.global.page;
  // const events = require('../../data/events').sort(sortArrayByProperties('asc', 'start'));
  // const events = require('../../../assets/json/events.json').sort(sortArrayByProperties('asc', 'start'));
  const events = out.global.eventlist.sort(sortArrayByProperties('asc', 'start'));
  const startlist = out.global.startlist;
  
  
  function sortArrayByProperty(order = 'asc', property) {
  
    return function (a, b) {
  
      const comparison = (a[property] === b[property]) ? 0 : (a[property] < b[property]) ? -1 : 1;
      return (order === 'desc') ? comparison * -1 : comparison;
    };
  }
  
  
  function sortArrayByProperties(order = 'asc', ...properties) {
  
    return function (a, b) {
  
      let i = 0;
      let comparison = 0;
  
      // while there are properties to compare, try to get a different result from 0
      while (comparison === 0 && i < properties.length) {
        comparison = sortArrayByProperty(order, properties[i])(a, b);
        i++;
      }
  
      return comparison;
    };
  }
  
  
  function getSchedule() {
  
    return needle;
  }
  
  const output = getSchedule();

  out.w("<div class=\"calendar grid grid--1of2\"" +
    marko_attr("id", "calendar-" + output) +
    "><div class=grid__cell><div id=flatpickr-events></div><div id=flatpickr-list class=flatpickr-list>");

  var $for$0 = 0;

  marko_forOf(events, function(event, i) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    if (event.active !== "n") {
      out.w("<div class=event-list" +
        marko_attr("aria-label", "" + event.start) +
        "><div><span><strong>" +
        marko_escapeXml(event.name) +
        "</strong></span> &nbsp;&nbsp;&nbsp;<span class=\"icon svg-icon svg-baseline\"><a" +
        marko_attr("href", ("./ics/" + event.id) + ".ics") +
        "><svg xmlns=http://www.w3.org/2000/svg class=i-calendar width=24 height=24 fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 viewBox=\"0 0 24 24\"><rect width=18 height=18 x=3 y=4 rx=2 ry=2></rect><path d=\"M16 2v4M8 2v4M3 10h18\"></path></svg></a></span><br><span>" +
        marko_escapeXml(event.start) +
        " to " +
        marko_escapeXml(event.end) +
        "</span></div>");

      if (startlist[event.id].length > 0) {
        out.w("<div class=\"grid-table toggle\"><span class=\"icon svg-icon svg-baseline\"><svg xmlns=http://www.w3.org/2000/svg class=i-users width=24 height=24 fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 viewBox=\"0 0 24 24\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=9 cy=7 r=4></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75\"></path></svg></span><span></span><span></span><span>##</span><span>Name</span><span class=fide-logo></span>");

        var $for$1 = 0;

        marko_forOf(startlist[event.id], function(player, i) {
          var $keyScope$1 = "[" + ((($for$1++) + $keyScope$0) + "]");

          out.w("<span>" +
            marko_escapeXml(i + 1) +
            ".</span><span>" +
            marko_escapeXml(player.personal.name.last) +
            ", " +
            marko_escapeXml(player.personal.name.first) +
            "</span><span><strong>" +
            marko_escapeXml(player.data.cfc.elo.classical) +
            "</strong>");

          if (player.data.fide.elo.classical) {
            out.w(" (" +
              marko_escapeXml(player.data.fide.elo.classical) +
              ")");
          }

          out.w("</span>");
        });

        out.w("</div>");
      }

      out.w("</div>");
    }
  });

  out.w("</div></div><div class=grid__cell><div class=flatpickr-output id=flatpickr-events-details></div></div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/project$0.0.0/dist/hapi/views/components/c-events.marko"
  };
