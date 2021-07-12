"use strict";

var sections = ["user_interface", "shortcut_keys", "shortcut_squares", "touch_gestures", "search_tool", "informant_symbols", "credits_and_license"];

function showSection(section) {
  var section2show = sections[0],
      theObj;

  for (var s in sections) {
    if (theObj = document.getElementById(sections[s] + "_section")) {
      theObj.style.display = "";
    }

    if (theObj = document.getElementById(sections[s] + "_heading")) {
      theObj.className = "heading";
    }

    if (sections[s] === section) {
      section2show = section;
    }
  }

  if (theObj = document.getElementById(section2show + "_section")) {
    theObj.style.display = "inline";
  }

  if (theObj = document.getElementById(section2show + "_heading")) {
    theObj.className = "headingSelected";
  }

  document.title = "chesskitui help: " + section2show.replace(/_/g, " ");
}

function print_help_row(one, two) {
  document.write("<tr><td style='text-align:left; vertical-align:top; padding-left:40px; white-space:nowrap;'>" + one + "</td><td style='text-align:left; vertical-align:top; padding-left:20px'>" + two + "</td></tr>");
}

function updateFooter() {
  var theObj;

  if (opener && typeof opener.pgn4web_version != "undefined") {
    if (theObj = document.getElementById("footerVersion")) {
      theObj.innerHTML = opener.pgn4web_version;
    }

    if (theObj = document.getElementById("footerRight")) {
      theObj.innerHTML = opener.location.href;
    }
  }
}

var isRotated = false;

if (opener && typeof opener.IsRotated != "undefined") {
  isRotated = opener.IsRotated;
}

var colorAtTheBottom = isRotated ? "Black" : "White";
var rowNumbers = isRotated ? "87654321" : "12345678";
var colLetters = isRotated ? "HGFEDCBA" : "ABCDEFGH";
var touchGesturesSupported = !!('ontouchstart' in window);

if (opener && typeof opener.touchEventEnabled != "undefined") {
  touchGesturesSupported = touchGesturesSupported && opener.touchEventEnabled;
}

var touchGestures_helpIntro, touchGestures_helpActions, touchGestures_helpText;

if (touchGesturesSupported) {
  touchGestures_helpIntro = "The user can interact with the chessboard using touch gestures:";

  if (opener && typeof opener.touchGestures_helpActions != "undefined") {
    touchGestures_helpActions = opener.touchGestures_helpActions;
  } else {
    touchGestures_helpActions = ["touch gestures info not available from the opener window"];
  }

  if (opener && typeof opener.touchGestures_helpText != "undefined") {
    touchGestures_helpText = opener.touchGestures_helpText;
  } else {
    touchGestures_helpText = [""];
  }
} else {
  touchGestures_helpIntro = "Touch gestures not available.<p></p>When enabled on supported touchscreen devices, touch gestures can be used to interact with the chessboard using swipe gestures.";
  touchGestures_helpActions = [];
  touchGestures_helpText = [];
}