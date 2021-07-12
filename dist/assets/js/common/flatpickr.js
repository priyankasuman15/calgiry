'use strict';
/*
  global xhrLoadJSON, sortArrayByProperties, html2fragment, dateToIsoDate, toggleClass
*/
// DOCUMENT READY without jQuery, IE9+
//

function ready(callback) {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
} // DOCUMENT READY usage, run code in callback
//


ready(function () {
  xhrEvents();
}); // GLOBAL VARIABLES
//
// uri

var index;
var current; // event schedule

var events = []; // flatpickr instance

var fp; // SETUP
//

function xhrEvents() {
  // load event data
  xhrLoadJSON(['../../json/events.json'], 1000, getEvents);
}

function getEvents() {
  events = this[0].sort(sortArrayByProperties('asc', 'start'));
  initFlatpickr();
  setEventListListeners();
} // FLATPICKR
//


function initFlatpickr() {
  // see -> hapi views c-events.marko component for layout helper
  var element = document.querySelector('#flatpickr-events');
  fp = flatpickr(element, {
    inline: true,
    allowInput: false,
    mode: 'multiple',
    // 'single' | 'multiple' | 'range'
    disableMobile: false,
    // minDate: '2019-01-01',
    // maxDate: '2019-12-31',
    // NEVEN
    minDate: '2020-01-01',
    maxDate: '2020-12-31',
    locale: {
      firstDayOfWeek: 1
    },
    shorthandCurrentMonth: false,
    weekNumbers: false,
    dateFormat: 'Y-m-d',
    altFormat: 'Y-m-d',
    ariaDateFormat: 'Y-m-d',
    time_24hr: true,
    // enableTime: true,
    // enableSeconds: false,
    // hourIncrement: 1,
    // minuteIncrement: 5,
    // defaultHour: 12,
    // defaultMinute: 0,
    // defaultSeconds: 0,
    // defaultDate: ['today'],
    enable: ['2020-01-01'],
    // outside of minDate & maxDate
    // disable: [{
    //     from: '2018-03-01',
    //     to: '2018-03-31'
    //   }],
    onReady: function onReady() {
      setEvents();
      setCalendarListeners(); // drawEventList(); // now handled in c-events.marko
    },
    onOpen: function onOpen(selectedDates, dateStr, instance) {// instance.set('defaultDate', flatpickr.parseDate('2019-11-11', 'Y-m-d'));
    },
    // onClose: function (selectedDates, dateStr, instance) {},
    // onValueUpdate: function (selectedDates, dateStr, instance) {},
    onMonthChange: function onMonthChange() {
      setEvents();
      setCalendarListeners();
    },
    onYearChange: function onYearChange() {
      setEvents();
      setCalendarListeners();
    },
    onChange: function onChange(selectedDates, dateStr, instance) {
      setEvents();
      setCalendarListeners();
    },
    // https://stackoverflow.com/questions/40324781/flatpickr-ondaycreate-add-class
    // https://github.com/flatpickr/flatpickr/issues/455
    onDayCreate: function onDayCreate(selectedDates, dateStr, instance, dayElem) {
      var idDate = "events-".concat(dayElem.getAttribute('aria-label'));
      var string = "<div id=\"".concat(idDate, "\" class=\"events\">"); // iterate over events

      for (var i = 0; i < events.length; ++i) {
        // only process events that are active
        if (events[i].active !== 'n') {
          var id = events[i].id;
          var compare = '';

          for (var j = 0; j < events[i].schedule.length; ++j) {
            compare = events[i].schedule[j].date;

            if (compare.indexOf(flatpickr.formatDate(dayElem.dateObj, 'Y-m-d')) !== -1) {
              dayElem.classList.add('cool');
              var start = j === 0 ? ' alpha' : ' beta';
              string += "<span id=\"event-".concat(id, "\" class=\"event").concat(start, "\"></span>");
            }
          }
        }
      }

      string += '</div>';
      var fragment = html2fragment(string);
      dayElem.appendChild(fragment);
    }
  });
} // . initFlatpickr


function drawEventList() {
  var string = '<h3>Events</h3>'; // iterate over events

  for (var i = 0; i < events.length; ++i) {
    // only process events that are active
    if (events[i].active !== 'n') {
      string += "<div class=\"event-list\" aria-label=\"".concat(events[i].start, "\"><strong>").concat(events[i].name, "</strong><br>").concat(events[i].start, " to ").concat(events[i].end, "</div>");
    }
  }

  var list = document.querySelector('#flatpickr-list');
  list.innerHTML = string;
}

function drawEventOutput() {
  var aria = this.getAttribute('aria-label'); // update event list

  updateEventList(aria); // update event details

  updateEventDetails(aria);
}

function updateEventList(aria) {
  var parts = aria.split('-');
  var year = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var day = parseInt(parts[3], 10);
  fp.changeMonth(month - 1, false);
}

function updateEventDetails(aria) {
  var string = ''; // iterate over events

  for (var i = 0; i < events.length; ++i) {
    // only process events that are active
    if (events[i].active !== 'n') {
      if (events[i].schedule.map(function (x) {
        return x.date;
      }).indexOf(aria) !== -1) {
        var address = "".concat(events[i].location.venue, "<br>").concat(events[i].location.address, "<br>").concat(events[i].location.city, ", ").concat(events[i].location.province, "<br>").concat(events[i].location.postal_code);
        var fees = "Adult $".concat(events[i].registration.entry_fee.adult, "<br>Junior $").concat(events[i].registration.entry_fee.junior, "<br>Senior $").concat(events[i].registration.entry_fee.senior, "<br>GM/WGM/IM/WIM $").concat(events[i].registration.entry_fee.titled.gm, "<br>FM $").concat(events[i].registration.entry_fee.titled.fm, "<br>CM $").concat(events[i].registration.entry_fee.titled.cm, "<br>NM $").concat(events[i].registration.entry_fee.titled.nm);
        var sectional = events[i].sections === 'y' ? 'Sectional ' : '';
        var formats = ['ch', 'Championship', 'inv', 'Invitational', 'm', 'Match', 'op', 'Open', 'rr', 'Round Robin', 'tt', 'Team Tournament'];
        var format = formats[formats.indexOf(events[i].format.type) + 1];
        var schedule = '';

        for (var j = 0; j < events[i].schedule.length; ++j) {
          schedule += "<li>Round ".concat(j + 1, ": ").concat(events[i].schedule[j].date, " (").concat(events[i].schedule[j].time, ")</li>");
        }

        var rated = [];
        var ratedCFC = events[i].format.rated.cfc === 'y' ? 'CFC' : '';
        var ratedFIDE = events[i].format.rated.fide === 'y' ? 'FIDE' : '';

        if (ratedCFC) {
          rated.push(ratedCFC);
        }

        if (ratedFIDE) {
          rated.push(ratedFIDE);
        }

        rated = rated.join(' & ') || 'Unrated';
        var register = "\n        <form id=\"reg_event\" method=\"post\" action=\"/events-post\">\n          <input type=\"hidden\" id=\"id\" name=\"id\" value=\"".concat(events[i].id, "\">\n          <button type=\"submit\" form=\"reg_event\" class=\"button button__action button__wide button__xl\">Enter Event</button>\n        </form>"); // hide registration button if event is 'inv'
        // or start date in the past

        if (events[i].format.type === 'inv' || events[i].format.type === 'tt' || events[i].start < dateToIsoDate()) {
          register = '';
        } // hide onsite registration if registration.on_site is set to 'n'


        var onsite = "<strong>Onsite Registration</strong><br>Add $".concat(events[i].registration.on_site, " to your entry fee<br><br>");

        if (events[i].registration.on_site === 'n') {
          onsite = '<strong>No Onsite Registration</strong><br>';
        }

        string += "\n        <div class=\"card\">\n          <div class=\"card__logo\"></div>\n          <div class=\"card__description\">\n            <div class=\"card__description--title\">\n              ".concat(events[i].name, "\n            </div>\n            <div class=\"card__description--subtitle\">\n              ").concat(events[i].start, " to ").concat(events[i].end, "\n            </div>\n            <div class=\"card__description--text\">\n              ").concat(address, "\n            </div>\n            <div class=\"card__description--media icon\">\n              <span class=\"icon svg-icon svg-baseline icon__feature\"><svg width=\"100%\" height=\"100%\" viewBox=\"0 0 258 165\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" xmlns:serif=\"http://www.serif.com/\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:10;\"><g transform=\"matrix(1,0,0,1,-16.387,-51.475)\"><g transform=\"matrix(1.11437,0,0,1.11437,-60.0578,-109.811)\"><g id=\"line-1\" serif:id=\"line 1\" transform=\"matrix(1,0,0,1,18.8448,2.69211)\"><g transform=\"matrix(1,0,0,1,165.477,204.693)\"><path d=\"M0,79.482L44.708,9.377L93.97,79.482L110.114,0L31.461,77.825L0,21.112\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,256.872,183.503)\"><path d=\"M0,39.725C-1.55,15.865 -21.397,-3.011 -45.649,-3.011C-70.913,-3.011 -91.395,17.471 -91.395,42.736\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,165.477,204.693)\"><path d=\"M0,79.482L-44.708,9.377L-93.97,79.482L-110.114,0L-31.461,77.825L0,21.112\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,74.0835,183.503)\"><path d=\"M0,39.725C1.55,15.865 21.396,-3.011 45.648,-3.011C70.912,-3.011 91.394,17.471 91.394,42.736\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,210.185,169.303)\"><path d=\"M0,44.709C0,20.017 -20.017,0 -44.708,0C-69.398,0 -89.416,20.017 -89.416,44.709\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(0,1,1,0,165.477,147.65)\"><ellipse cx=\"10.827\" cy=\"0\" rx=\"10.827\" ry=\"10.827\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,71.5068,284.175)\"><path d=\"M0,0L187.94,0\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g></g></g></g></svg></span>\n              <span class=\"icon svg-icon svg-baseline icon__feature\"><svg width=\"100%\" height=\"100%\" viewBox=\"0 0 258 165\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" xmlns:serif=\"http://www.serif.com/\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:10;\"><g transform=\"matrix(1,0,0,1,-16.387,-51.475)\"><g transform=\"matrix(1.11437,0,0,1.11437,-60.0578,-109.811)\"><g id=\"line-1\" serif:id=\"line 1\" transform=\"matrix(1,0,0,1,18.8448,2.69211)\"><g transform=\"matrix(1,0,0,1,165.477,204.693)\"><path d=\"M0,79.482L44.708,9.377L93.97,79.482L110.114,0L31.461,77.825L0,21.112\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,256.872,183.503)\"><path d=\"M0,39.725C-1.55,15.865 -21.397,-3.011 -45.649,-3.011C-70.913,-3.011 -91.395,17.471 -91.395,42.736\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,165.477,204.693)\"><path d=\"M0,79.482L-44.708,9.377L-93.97,79.482L-110.114,0L-31.461,77.825L0,21.112\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,74.0835,183.503)\"><path d=\"M0,39.725C1.55,15.865 21.396,-3.011 45.648,-3.011C70.912,-3.011 91.394,17.471 91.394,42.736\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,210.185,169.303)\"><path d=\"M0,44.709C0,20.017 -20.017,0 -44.708,0C-69.398,0 -89.416,20.017 -89.416,44.709\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(0,1,1,0,165.477,147.65)\"><ellipse cx=\"10.827\" cy=\"0\" rx=\"10.827\" ry=\"10.827\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,71.5068,284.175)\"><path d=\"M0,0L187.94,0\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g></g></g></g></svg></span>\n              <span class=\"icon svg-icon svg-baseline icon__feature\"><svg width=\"100%\" height=\"100%\" viewBox=\"0 0 258 165\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" xmlns:serif=\"http://www.serif.com/\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:10;\"><g transform=\"matrix(1,0,0,1,-16.387,-51.475)\"><g transform=\"matrix(1.11437,0,0,1.11437,-60.0578,-109.811)\"><g id=\"line-1\" serif:id=\"line 1\" transform=\"matrix(1,0,0,1,18.8448,2.69211)\"><g transform=\"matrix(1,0,0,1,165.477,204.693)\"><path d=\"M0,79.482L44.708,9.377L93.97,79.482L110.114,0L31.461,77.825L0,21.112\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,256.872,183.503)\"><path d=\"M0,39.725C-1.55,15.865 -21.397,-3.011 -45.649,-3.011C-70.913,-3.011 -91.395,17.471 -91.395,42.736\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,165.477,204.693)\"><path d=\"M0,79.482L-44.708,9.377L-93.97,79.482L-110.114,0L-31.461,77.825L0,21.112\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,74.0835,183.503)\"><path d=\"M0,39.725C1.55,15.865 21.396,-3.011 45.648,-3.011C70.912,-3.011 91.394,17.471 91.394,42.736\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,210.185,169.303)\"><path d=\"M0,44.709C0,20.017 -20.017,0 -44.708,0C-69.398,0 -89.416,20.017 -89.416,44.709\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(0,1,1,0,165.477,147.65)\"><ellipse cx=\"10.827\" cy=\"0\" rx=\"10.827\" ry=\"10.827\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,71.5068,284.175)\"><path d=\"M0,0L187.94,0\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g></g></g></g></svg></span>\n              <span class=\"icon svg-icon svg-baseline icon__feature\"><svg width=\"100%\" height=\"100%\" viewBox=\"0 0 258 165\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" xmlns:serif=\"http://www.serif.com/\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:10;\"><g transform=\"matrix(1,0,0,1,-16.387,-51.475)\"><g transform=\"matrix(1.11437,0,0,1.11437,-60.0578,-109.811)\"><g id=\"line-1\" serif:id=\"line 1\" transform=\"matrix(1,0,0,1,18.8448,2.69211)\"><g transform=\"matrix(1,0,0,1,165.477,204.693)\"><path d=\"M0,79.482L44.708,9.377L93.97,79.482L110.114,0L31.461,77.825L0,21.112\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,256.872,183.503)\"><path d=\"M0,39.725C-1.55,15.865 -21.397,-3.011 -45.649,-3.011C-70.913,-3.011 -91.395,17.471 -91.395,42.736\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,165.477,204.693)\"><path d=\"M0,79.482L-44.708,9.377L-93.97,79.482L-110.114,0L-31.461,77.825L0,21.112\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,74.0835,183.503)\"><path d=\"M0,39.725C1.55,15.865 21.396,-3.011 45.648,-3.011C70.912,-3.011 91.394,17.471 91.394,42.736\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,210.185,169.303)\"><path d=\"M0,44.709C0,20.017 -20.017,0 -44.708,0C-69.398,0 -89.416,20.017 -89.416,44.709\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(0,1,1,0,165.477,147.65)\"><ellipse cx=\"10.827\" cy=\"0\" rx=\"10.827\" ry=\"10.827\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g><g transform=\"matrix(1,0,0,1,71.5068,284.175)\"><path d=\"M0,0L187.94,0\" style=\"fill:none;stroke:rgb(231,193,87);stroke-width:11.22px;\"/></g></g></g></g></svg></span>\n            </div>\n            <ul class=\"card__description--list\">\n              ").concat(schedule, "\n            </ul>\n            <div class=\"card__description--text\">\n              <strong>Organizer</strong><br>").concat(events[i].organizer[0].name.first, " ").concat(events[i].organizer[0].name.last, "<br>").concat(events[i].organizer[0].email, "<br><br>\n              <strong>Tournament Director</strong><br>").concat(events[i].tournament_director[0].name.first, " ").concat(events[i].tournament_director[0].name.last, "<br>").concat(events[i].tournament_director[0].email, "<br><br>\n              <strong>Format / Time Control</strong><br>").concat(format, " ").concat(sectional, "(").concat(events[i].schedule.length, " rounds)<br>").concat(events[i].format.time_control, "<br><br>\n              <strong>Rated</strong><br>").concat(rated, "<br><br>\n              <strong>Entry Fees</strong><br>").concat(fees, "<br><br>\n              ").concat(onsite, "\n            </div>\n            <div>").concat(register, "</div>\n          </div>\n          <div class=\"card__hilite\">$").concat(events[i].registration.entry_fee.adult, "</div>\n        </div>");
      }
    }
  }

  var details = document.querySelector('#flatpickr-events-details');
  details.innerHTML = string;
}

function setEvents() {
  var wrapper = document.querySelectorAll('[id^=\'events-\']');

  for (var i = 0; i < wrapper.length; ++i) {
    var items = wrapper[i].querySelectorAll('.event');

    if (items.length > 0) {
      setEventDetailStyles(items);
    }
  }
}

function setEventDetailStyles(items) {
  var number = 12;
  var diameter = 37;
  var radius = diameter / 2;
  var angle = 360 / number;
  var rotation = 90;

  for (var i = 0; i < items.length; ++i) {
    items[i].style.transform = "rotate(".concat(rotation, "deg) translate(").concat(radius, "px) rotate(-").concat(rotation, "deg)");
    rotation += angle;
  }
}

function setCalendarListeners() {
  var days = document.querySelectorAll('.flatpickr-day.cool');

  for (var i = 0; i < days.length; ++i) {
    days[i].addEventListener('click', drawEventOutput, false);
  }
}

function setEventListListeners() {
  var list = document.querySelectorAll('.event-list');

  for (var i = 0; i < list.length; ++i) {
    list[i].addEventListener('click', drawEventOutput, false);
  }

  var test = document.querySelectorAll('.toggle');

  var _loop = function _loop(_i) {
    test[_i].addEventListener('click', function () {
      toggleClass(test[_i], 'toggle');
    }, false);
  };

  for (var _i = 0; _i < test.length; ++_i) {
    _loop(_i);
  }

  selectNearestEvent(list);
} // select event from event list that is nearest today's date


function selectNearestEvent(list) {
  var today = dateToIsoDate();

  for (var i = 0; i < list.length; ++i) {
    if (list[i].getAttribute('aria-label') >= today) {
      list[i].click();
      break;
    }
  }
}