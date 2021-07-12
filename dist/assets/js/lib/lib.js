'use strict';
/**
 * iterates over an array of objects, pushes all properties matching
 * 'property' into a new array, but only once per occurance
 * undefined properties are ignored
 *
 * @param {object} object - object array you want to iterate over
 * @param {string} property - property name you want
 * @example getArrayByProperty(property, array);
 * @returns {array} array - sorted array with unique values, which may be of length 0, or undefined
 */

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function getArrayByUniqueProperty() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var property = arguments.length > 1 ? arguments[1] : undefined;

  if (!property) {
    return undefined;
  }

  var properties = [];
  Object.keys(object).forEach(function (child) {
    if (properties.indexOf(object[child][property]) === -1) {
      if (object[child][property]) {
        properties.push(object[child][property]);
      }
    }
  });
  return properties.sort();
} // https://mgechev.github.io/javascript-algorithms/module-searching_recursive-binarysearch.html

/**
 * searches an array of objects for an item matching a 'key' and 'value',
 * using a recursive binary search algorithm, and requires a sorted array
 *
 * @param {array} array - array of objects to search
 * @param {string} property - name of key to compare
 * @param {any} value - value of key
 * @param {number} left - left index
 * @param {number} right - right index
 * @example searchArrayByPropertyValue(array, property, value[, 0][, array.length]);
 * @returns {number} - returns index in array if found, otherwise -1
 */


function searchArrayByPropertyValue(array, property, value) {
  var left = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var right = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : array.length;

  if (left > right) {
    return -1;
  }

  var middle = Math.floor((right + left) / 2);

  if (array[middle][property] === value) {
    return middle;
  } else if (array[middle][property] > value) {
    return searchArrayByPropertyValue(array, property, value, left, middle - 1);
  }

  return searchArrayByPropertyValue(array, property, value, middle + 1, right);
} // https://mgechev.github.io/javascript-algorithms/module-searching_recursive-binarysearch.html

/**
 * searches an array for an item matching a 'value',
 * using a recursive binary search algorithm, and requires a sorted array
 *
 * @param {array} array - array of objects to search
 * @param {any} value - value of key
 * @param {number} left - left index
 * @param {number} right - right index
 * @example searchArrayByValue(array, value[, 0][, array.length]);
 * @returns {number} - returns index in array if found, otherwise -1
 */


function searchArrayByValue(array, value) {
  var left = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var right = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : array.length;

  if (left > right) {
    return -1;
  }

  var middle = Math.floor((right + left) / 2);

  if (array[middle] === value) {
    return middle;
  } else if (array[middle] > value) {
    return searchArrayByValue(array, value, left, middle - 1);
  }

  return searchArrayByValue(array, value, middle + 1, right);
}
/**
 * searches an array of objects for an item matching a 'key' and 'value'
 * search uses array.map non-recursively, and does not require a sorted array
 *
 * @param {any} key - name of property to lookup
 * @param {any} needle - value of property key
 * @param {any} haystack - array of objects to search
 * @example getIndexKeyNeedleHaystack(property, value, array);
 * @returns {object} - returns array element index if found, otherwise -1
 */


function getIndexKeyNeedleHaystack(key, needle, haystack) {
  return haystack.map(function (e) {
    return e[key];
  }).indexOf(needle);
} // https://stackoverflow.com/questions/8537602/any-way-to-extend-javascripts-array-sort-method-to-accept-another-parameter

/**
 * function generator for sorting arrays of objects by property name
 *
 * @param {string} [order='asc'] - sort order, default = 'asc'
 * @param {string} property - name of property to sort by
 * @example array.sort(sortArrayByProperty('asc', property));
 * @returns {number} - returns 1, 0, -1
 */


function sortArrayByProperty() {
  var order = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'asc';
  var property = arguments.length > 1 ? arguments[1] : undefined;
  return function (a, b) {
    // TODO check if property is a number and sort differently
    // if (Number.isInteger(+a[property]) && Number.isInteger(+b[property])) {
    //   a[property] = +a[property];
    //   b[property] = +b[property];
    // }
    var comparison = a[property] === b[property] ? 0 : a[property] < b[property] ? -1 : 1;
    return order === 'desc' ? comparison * -1 : comparison;
  };
} // https://stackoverflow.com/questions/11379361/how-to-sort-an-array-of-objects-with-multiple-field-values-in-javascript

/**
 * uses function arguments for dynamically sorting arrays of objects by property names
 * sorts array in the order of property names supplied
 * calls/delegates to sortArrayByProperty() for each property comparison
 *
 * @param {string} [order='asc'] - sort order, default = 'asc'
 * @param {arguments} - list of property names to compare for sorting
 * @example array.sort(sortArrayByProperties('asc', prop1[, prop2]));
 * @returns {number} - returns 1, 0, -1
 */


function sortArrayByProperties() {
  var order = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'asc';

  for (var _len = arguments.length, properties = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    properties[_key - 1] = arguments[_key];
  }

  // save arguments object as it will be overwritten
  // const properties = Array.from(arguments);
  return function (a, b) {
    var i = 0;
    var comparison = 0; // while there are properties to compare, try to get a different result from 0

    while (comparison === 0 && i < properties.length) {
      comparison = sortArrayByProperty(order, properties[i])(a, b);
      i++;
    }

    return comparison;
  };
} // https://gist.github.com/jtpaasch/9219512

/**
 * find duplicate items in two arrays
 * items in arrays must be simple values, e.g. number, string, boolean, undefined, or null
 *
 * @param {array} array1 - first array to compare
 * @param {array} array2 - second array to compare
 * @example findArrayDuplicates(array1, array2);
 * @returns {array} - returns sorted array of duplicate items
 */


function findArrayDuplicates(array1, array2) {
  var duplicates = array1.filter(function (x) {
    return array2.indexOf(x) > -1;
  });
  return duplicates.sort();
} // http://stackoverflow.com/questions/19301768/determine-if-the-object-has-a-property-and-value-in-javascript

/**
 * determine if object has property and value
 *
 * @param {object} object - object to search
 * @param {string} property - property to verify
 * @param {any} value - value of property to match
 * @example
 * @returns {boolean} - returns true or false
 */


function hasPropertyValue(object, property, value) {
  return object.hasOwnProperty(property) && object[property] === value;
} // https://github.com/developit/dlv

/**
 * safely get a dot-notated path within a (deeply) nested object
 * with ability to return a default if the full key path does not exist or the value is undefined
 *
 * @param {object} object - object to traverse and retrieve value from
 * @param {string | array} keypath
 * @param {*} def
 * @param {*} p
 * @example deepDelveObject(object, 'a.b.c.e')
 * @returns {object} - returns value of the keypath, else undefined or supplied default
 */


function deepDelveObject(object, keypath, def, p) {
  p = 0;
  keypath = keypath.split ? keypath.split('.') : keypath;

  while (object && p < keypath.length) {
    object = object[keypath[p++]];
  }

  return object === undefined ? def : object;
} // https://github.com/kalmbach/bury
// https://github.com/lukeed/dset

/**
 * safely write deep object values
 * mutates existing values
 *
 * @param {object} object - object to traverse and mutate with value
 * @param {string | array} keypath - the keypath that should receive the value
 * @param {any} value - the value to set at the end of the keypath, can be object
 * @example deepSetObject(object, 'b.x.y.z', 'hola')
 * @returns {object} - returns value of the keypath, else undefined or supplied default
 */


function deepSetObject(object, keypath, value) {
  keypath.split && (keypath = keypath.split('.'));
  var x;

  for (var i = 0; i < keypath.length; ++i) {
    x = object[keypath[i]];
    object = object[keypath[i]] = i === keypath.length - 1 ? value : x === null ? {} : x;
  }

  return object === undefined ? value : object;
} // https://gist.github.com/Salakar/1d7137de9cb8b704e48a

/**
 * deep merge property keys of two objects recursively
 *
 * @param {object} target - target object to be updated
 * @param {object} source - source object to be merged
 * @example mergeDeepObject(target, source);
 * @returns {object} - returns target object with properties of source object merged
 */


function mergeDeepObject(target, source) {
  function isObject(item) {
    // check if parameters are objects
    return item && _typeof(item) === 'object' && !Array.isArray(item) && item !== null;
  }

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(function (key) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, _defineProperty({}, key, {}));
        }

        mergeDeepObject(target[key], source[key]);
      } else {
        Object.assign(target, _defineProperty({}, key, source[key]));
      }
    });
  }

  return target;
} // http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically

/**
 * merge property keys of two objects recursively
 *
 * @param {object} target - target object to be updated
 * @param {object} source - source object to be merged
 * @example
 * @returns {object} - returns target object with properties of source object merged
 */


function mergeObjectProperties(target, source) {
  for (var p in source) {
    try {
      // update value if property in destination object is already set
      if (source[p].constructor === Object) {
        target[p] = mergeObjectProperties(target[p], source[p]);
      } else {
        target[p] = source[p];
      }
    } catch (e) {
      // create and set property value in destination object if it does not exist
      target[p] = source[p];
    }
  }

  return target;
}
/**
 * merge property keys of two objects
 *
 * @param {object} target - target object to be updated
 * @param {object} source - source object to be merged
 * @example
 * @returns {object} - returns target object with properties of source object merged
 */


function mergeObject(target, source) {
  for (var p in source) {
    if (source.hasOwnProperty(p)) {
      target[p] = _typeof(source[p]) === 'object' ? mergeObject(target[p], source[p]) : source[p];
    }
  }

  return target;
}
/**
 * merge property keys of two objects
 * source keys overwrite target keys
 *
 * @param {object} target - target object to be updated
 * @param {object} source - source object to be merged
 * @example
 * @returns {object} - returns target object with properties of source object merged
 */


function extendObject(target, source) {
  Object.keys(source).forEach(function (key) {
    target[key] = source[key];
  });
  return target;
} // https://stackoverflow.com/questions/5484673/javascript-how-to-dynamically-create-nested-objects-using-object-names-given-by

/**
 * creates hierarchy of object 'keys', existing or not, for adding onto 'base' object
 * optional 'value' assigned to final 'keys' object in the hierarchy
 * accepts string or array of 'keys'
 * does not overwrite existing base object keys or values
 *
 * @param {object} object - base 'object' on which to create hierarchy
 * @param {*} keys - string or array of dynamic object keys
 * @param {*} value - value to assign final 'keys' parameter, can be object
 * @example createNestedObject(object, 'shapes.rectangle.width', 400);
 * @returns {any} - 'value' of final 'keys' parameter, plus updated base 'object' including new hierarchy of 'keys' and 'value'
 */


function createNestedObject(object, keys, value) {
  // split string 'keys' argument into array
  if (typeof keys === 'string') {
    keys = keys.split('.');
  } // if 'value' is given, remove final 'keys' and keep for later


  var lastKey = arguments.length === 3 ? keys.pop() : false; // walk 'keys' hierarchy and create new objects as needed

  for (var i = 0; i < keys.length; ++i) {
    // set final empty object if lastKey was removed earlier
    object = object[keys[i]] = object[keys[i]] || {};
  } // set 'value' to last 'keys' object


  if (lastKey) {
    object = object[lastKey] = value;
  }

  return object;
} // http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript

/**
 * prints a number (integer | float) with commas separators
 *
 * @param {number} number - number input, which can be an integer or float
 * @example numberWithCommas(14385210.08);
 * @returns {string} - returns the input as a string with commas separators
 */


function numberWithCommas(number) {
  // return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // // for numbers with more than three (3) places after the decimal
  var parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
} // https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery

/**
 * generates a 32-bit integer hash from a string
 *
 * @param {any} string - string input
 * @example makeHashCode(string);
 * @returns {integer} - 32-bit integer
 */


function makeHashCode(string) {
  var hash = 0;
  var chr;

  if (!string || string.length === 0) {
    return hash;
  }

  for (var i = 0; i < string.length; ++i) {
    chr = string.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash = hash | 0; // convert to 32bit integer
  }

  return Math.abs(hash);
} // http://stackoverflow.com/questions/14484787/wrap-text-in-javascript

/**
 * wraps 'string' at line length 'width' using provided 'newline' character
 * uses recursion to keep subdividing the input string
 *
 * @param {string} string - text to be wrapped
 * @param {integer} width - column at which text is wrapped, default is 80
 * @param {string} newline - newline character, default is '\n'
 * @example wordWrap(string)
 * @returns {string} - input 'string' wrapped to specified 'width' using 'newline' character
 */


function wordWrap(string) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 80;
  var newline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '\n';

  if (string.length > width) {
    var position = width; // this will set 'position' to the last space character in the first 'width' number of 'string'

    for (; position > 0 && string[position] !== ' '; --position) {} // while there is 'string' left, we keep subdividing recursively


    if (position > 0) {
      var left = string.slice(0, position);
      var right = string.slice(position + 1);
      return left + newline + wordWrap(right, width, newline);
    }
  }

  return string;
} // https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript

/**
 * parses input date and returns a string in YYYY-MM-DD format
 * uses default date of today
 * takes into account TimezoneOffset
 *
 * @param {date} date - date object to be converted, default is today
 * @example dateToIsoDate()
 * @returns {string} - today's date in YYYY-MM-DD format
 */


function dateToIsoDate() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toJSON().slice(0, 10);
}
/**
 * parses input time in 12 hour format and returns a string in 24 hour format
 *
 * @param {string} time12h
 * @xample time12to24('08:24:00 PM')
 * @returns {string} - time in 24 hour format
 */


function time12to24(time12h) {
  var _time12h$split = time12h.split(' '),
      _time12h$split2 = _slicedToArray(_time12h$split, 2),
      time = _time12h$split2[0],
      modifier = _time12h$split2[1];

  var _time$split = time.split(':'),
      _time$split2 = _slicedToArray(_time$split, 3),
      hours = _time$split2[0],
      minutes = _time$split2[1],
      seconds = _time$split2[2];

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return hours + ':' + minutes + ':' + seconds;
}
/**
 * parses date string in 24 hour format, adds duration minutes, and returns time string in 24 hour format
 *
 * @param {*} date24
 * @param {*} duration
 * @example addDuration('March 16, 1962 16:00:30', 17)
 * @returns {string} - time string in 24 hour format
 */


function addDuration(date24, duration) {
  var date = new Date(date24);
  var endDate = new Date(date.getTime() + duration * 60000);
  var string = endDate.toTimeString().split(' ');
  return string[0];
}
/**
 * given an ISO formatted date, e.g. '2019-03-16', returns an object with year, month, date as integers
 *
 * @param {string} isoDate
 * @example getDateParts('2019-03-16')
 * @returns {object} - object with year, month, date as integers
 */


function getDateParts(isoDate) {
  var parts = isoDate.split('-');
  return {
    year: parseInt(parts[0]),
    month: parseInt(parts[1]),
    day: parseInt(parts[2])
  };
}
/**
 * given a time string in 24 hour format, e.g. '17:45', returns an object with hours, minutes as integers
 *
 * @param {string} timeString
 * @example getTimeParts('17:45')
 * @returns {object} - object with hours, minutes as integers
 */


function getTimeParts(timeString) {
  var parts = timeString.split(':');
  return {
    hours: parseInt(parts[0]),
    minutes: parseInt(parts[1])
  };
} // https://stackoverflow.com/questions/8152426/how-can-i-calculate-the-number-of-years-betwen-two-dates

/**
 * parses input date and returns difference to today's date in years
 *
 * @param {date} isoDate - date string in YYYY-DD-YY format
 * @example getYearDifferenceFromIsoDate(isoDate)
 * @returns {integer} - difference between isoDate and today's date in years
 */


function getYearDifferenceFromIsoDate(isoDate) {
  var millisecondsDate = Date.now() - new Date(isoDate);
  var differenceDate = new Date(millisecondsDate);
  return Math.abs(differenceDate.getUTCFullYear() - 1970);
} // http://ourcodeworld.com/articles/read/188/encode-and-decode-html-entities-using-pure-javascript

/**
 * converts every character in a 'string' to its html encoded equivalent
 *
 * @param {string} string - string to encode
 * @example
 * @returns {string} - the converted and encoded 'string'
 */


function encodeHtmlEntity(string) {
  var buffer = [];

  for (var i = string.length - 1; i >= 0; --i) {
    buffer.unshift(['&#', string[i].charCodeAt(), ';'].join(''));
  }

  return buffer.join('');
} // http://ourcodeworld.com/articles/read/188/encode-and-decode-html-entities-using-pure-javascript

/**
 * converts an html encoded string to its decoded equivalent
 *
 * @param {string} string - string to decode
 * @example
 * @returns {string} - the converted and decoded 'string'
 */


function decodeHtmlEntity(string) {
  return string.replace(/&#(\d+);/g, function (match, character) {
    return String.fromCharCode(character);
  });
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://www.npmjs.com/package/escape-string-regexp

/**
 * escapes user input to be treated as a literal string for use in a RegEx constructor
 *
 * @param {string} string - string to escape
 * @example
 * @returns {string} - the escaped 'string' safe for use in a regular expression
 */


function escapeRegularExpression(string) {
  return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$&');
} // https://stackoverflow.com/questions/5732043/javascript-reduce-on-array-of-objects

/**
 * removes duplicate words from input string
 * alternatively, just convert an Array to a Set and back?
 *
 * @param {string} string - string that contains duplicate words
 * @example removeRepeatedWords(string);
 * @returns {string} - the string with duplicates removed
 */


function removeRepeatedWords(string) {
  var deduplicate = function deduplicate(words, word) {
    return words.includes(word) ? words : words.concat(word);
  };

  var array = string.split(' ');
  var deduplicated = array.reduce(deduplicate, []);
  return deduplicated.join(' ');
} // https://stackoverflow.com/questions/14234560/javascript-how-to-get-parent-element-by-selector

/**
 * finds the closest parent dom element that matches a given selector (class)
 * and returns the dom element if found, else null
 *
 * @param {*} element
 * @param {string} selector - selector string for the element(s) we want
 * @param {string} stop - optional class name of the element where we stop ascending the dom tree
 * @example closestAncestorWithClass(element, 'class-value')
 * @returns {element} - closest parent dom element if found, else null
 */


function closestAncestorWithClass(element, selector, stop) {
  var found = null;

  while (element) {
    if (element.className.indexOf(selector) > -1) {
      found = element;
      break;
    } else if (stop && element.className.indexOf(stop) > -1) {
      break;
    }

    element = element.parentElement;
  }

  return found;
} // https://www.sitepoint.com/add-remove-css-class-vanilla-js

/**
 * selects dom elements and adds specified class values
 * minimum requirement IE10+
 *
 * @param {string} selector - selector string for the element(s) we want
 * @param {string} myClass - class name(s) to add to our selected element(s)
 * @example addClass('.class-selector', 'class-values');
 */


function addClass(selector, myClass) {
  var elements = document.querySelectorAll(selector);

  for (var i = 0; i < elements.length; ++i) {
    elements[i].classList.add(myClass);
  }
} // https://www.sitepoint.com/add-remove-css-class-vanilla-js

/**
 * selects dom elements and removes specified class values
 * minimum requirement IE10+
 *
 * @param {string} selector - selector string for the element(s) we want
 * @param {string} myClass - class name(s) to remove from our selected element(s)
 * @example removeClass('.class-selector', 'class-values');
 */


function removeClass(selector, myClass) {
  var elements = document.querySelectorAll(selector);

  for (var i = 0; i < elements.length; ++i) {
    elements[i].classList.remove(myClass);
  }
} // https://www.sitepoint.com/add-remove-css-class-vanilla-js

/**
 * selects dom element and toggles specified class value
 * minimum requirement IE10+
 *
 * @param {element} element - dom element we want to work with
 * @param {string} myClass - class name(s) to toggle on our element
 * @example toggleClass('.class-selector', 'class-value');
 */


function toggleClass(element, myClass) {
  element.classList.toggle(myClass);
} // https://www.sitepoint.com/add-remove-css-class-vanilla-js

/**
 * takes a dom element and returns the number of classes on the element
 * minimum requirement IE10+
 *
 * @param {element} element - dom element we want to work with
 * @example lengthClass(element)
 * @returns {number} - the number of classes on the element
 */


function lengthClass(element) {
  return element.ClassList.length;
} // https://www.sitepoint.com/add-remove-css-class-vanilla-js

/**
 * checks if the specified class value exists in class attribute of the element
 * minimum requirement IE10+
 *
 * @param {element} element - dom element we want to work with
 * @param {string} myClass - the class name we want to check
 * @example containsClass(element, 'class-value')
 * @returns {boolean} - true/false if the element contains the specified class
 */


function containsClass(element, myClass) {
  return element.classList.contains(myClass) ? true : false;
} // https://www.tomas-dvorak.cz/posts/nodejs-request-without-dependencies/

/**
 * light weight retrieve request body
 * handles both http(s) requests
 * accepts status codes 200-399 as valid
 *
 * @param {string} url - requested url
 * @example getUrlContent(http://neven.ca)
 * @returns {promise} - body of response
 */


function getUrlContent(url) {
  var lib = url.startsWith('https') ? require('https') : require('http');
  return new Promise(function (resolve, reject) {
    var request = lib.get(url, function (response) {
      if (response.statusCode < 200 || response.statusCode > 399) {
        reject(new Error('Page Load Failed. Status Code: ' + response.statusCode));
      }

      var body = [];
      response.on('data', function (chunk) {
        return body.push(chunk);
      });
      response.on('end', function () {
        return resolve(body.join(''));
      });
    });
    request.on('error', function (error) {
      return reject(error);
    });
  });
} // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests

/**
 * makes asynchronous XMLHttpRequest
 *
 * @param {string} url - target URL to read via 'GET'
 * @param {number} timeout - time in milliseconds until the request terminates with an error
 * @param {*} callback - function to execute on successful completion of XHR operation
 * @param {any} opts - arbitrary and optional additional arguments that are passed through the XHR object to the callback function
 * @example xhrLoadFile('./path/file.ext', 1000, callback, opts);
 * @returns {any} - result of XMLHttpRequest
 */


function xhrLoadFile(url, timeout, callback, opts) {
  var xhr = new XMLHttpRequest();
  xhr.callback = callback;
  xhr.arguments = Array.prototype.slice.call(arguments, 3);

  xhr.ontimeout = function () {
    console.error("request for ".concat(url, " timed out"));
  };

  xhr.onerror = function () {
    console.error(xhr.statusText);
  };

  xhr.onload = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback.apply(xhr, xhr.arguments);
      }
    }
  };

  xhr.open('GET', url, true);
  xhr.timeout = timeout;
  xhr.send(null);
} // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests

/**
 * makes asynchronous XMLHttpRequest for JSON file(s)
 *
 * @param {array} urls - target URL(s) to read via 'GET'
 * @param {number} timeout - time in milliseconds until the request terminates with an error
 * @param {*} callback - function to execute on successful completion of XHR operation
 * @example xhrLoadJSON(['./path/file.json'[, './path/file2.json']], 1000, callback);
 * @returns {array} - result(s) of XMLHttpRequest(s)
 */


function xhrLoadJSON(urls, timeout, callback) {
  var count = 0;
  var array = [];

  function load(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.arguments = Array.prototype.slice.call(arguments, 3);

    xhr.ontimeout = function () {
      console.error("request for ".concat(url, " timed out"));
    };

    xhr.onerror = function () {
      console.error(xhr.statusText);
    };

    xhr.onload = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          array.push(JSON.parse(xhr.responseText));
          cb();
        }
      }
    };

    xhr.open('GET', url, true);
    xhr.timeout = timeout;
    xhr.send(null);
  }

  function multi() {
    count++;

    if (count >= urls.length) {
      callback.call(array);
    }
  }

  var _iterator = _createForOfIteratorHelper(urls),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var url = _step.value;
      load(url, multi);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
} // https://gist.github.com/jtpaasch/2568647

/**
 * loads scripts asynchronously in browsers
 * uses script.async attribute, compatible with all modern browsers
 *
 * @param {string} url - target url of script file to load
 * @param {*} callback - function to execute on successful script load
 * @example asyncScriptoader('./path/to/script.js', callback);
 */


function asyncScriptLoader(url, callback) {
  var script = document.createElement('script');
  script.src = url, script.async = true;

  if (callback !== undefined) {
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback(url);
      }
    };

    script.onload = function () {
      callback(url);
    };
  }

  document.body.appendChild(script);
} // https://github.com/get/parseuri/blob/master/index.js

/**
 * parses uri for components
 *
 * @param {string} url - url to parse
 * @example parseUri('google.com:8080/foo/bar?foo=bar');
 * @returns {object} - object with keys composed of 'parts' array
 */


function parseUri(url) {
  var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
  var src = url;
  var b = url.indexOf('[');
  var e = url.indexOf(']');

  if (b !== -1 && e !== -1) {
    url = url.substring(0, b) + url.substring(b, e).replace(/:/g, ';') + url.substring(e, url.length);
  }

  var m = re.exec(url || '');
  var uri = {};
  var i = parts.length;

  while (i--) {
    uri[parts[i]] = m[i] || '';
  }

  if (b !== -1 && e !== -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
    uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
    uri.ipv6uri = true;
  }

  return uri;
} // https://gist.github.com/ryanmorr/58495cf47fc783bac8c8783c9e517e0b

/**
 * converts a string of valid html into a live dom fragment
 * uses <template> tag if available
 *
 * @param {string} html - string to convert
 * @example html2fragment('<span class="nav-item"><a href="/services">Services</a></span>');
 * @returns {fragment} - dom fragment
 */


function html2fragment(html) {
  var template = document.createElement('template');

  if ('content' in template) {
    template.innerHTML = html;
    return document.importNode(template.content, true);
  }

  var fragment = document.createDocumentFragment();
  var proxy = document.createElement('div');
  proxy.innerHTML = html;

  while (proxy.firstChild) {
    fragment.appendChild(proxy.firstChild);
  }

  return fragment;
} // https://github.com/rhysbrettbowen/debounce/issues/2

/**
 * debounces the supplied function
 *
 * @param {func} func - the supplied function that will be debounced
 * @param {wait} - the amount of time to wait between function executions
 * @example window.addEventListener('scroll', debounce((e) => { console.log(e); }, 1000));
 * @returns {function}
 */


var debounce = function debounce(func, wait) {
  var timeout;
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var last;
    var timestamp = Date.now();

    var later = function later() {
      last = Date.now() - timestamp;
      timeout = wait > last ? setTimeout(later, wait - last) : function () {
        func.apply(void 0, args);
      }();
    };

    timeout || (timeout = setTimeout(later, wait));
  };
};
/**
 * gets the size of an element and its position relative to the viewport
 *
 * @param {element} element - dom element we want to work with
 * @example getBoundingBox(element);
 * @returns {boundingBox}
 */


function getBoundingBox(element) {
  var boundingBox = element.getBoundingClientRect();
  return boundingBox;
}
/**
* gets the current scroll position from top of viewport
*
* @example getScrollY();
* @returns {number} - returns scrollY scroll position from top of viewport, in pixels
*/


function getScrollY() {
  var scrollY = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  return scrollY;
}
/**
 * gets public ip address of host machine
 *
 * @returns {string} - returns ip address
 */


function getPublicIP() {
  var http = require('http');

  http.get({
    'host': 'api.ipify.org',
    'port': 80,
    'path': '/'
  }, function (response) {
    response.on('data', function (ip) {
      console.log(ip.toString());
    });
  });
}
/* NodeJS & CommonJS */


if (typeof exports !== 'undefined') {
  module.exports.hasPropertyValue = hasPropertyValue;
  module.exports.deepDelveObject = deepDelveObject;
  module.exports.deepSetObject = deepSetObject;
  module.exports.findArrayDuplicates = findArrayDuplicates;
  module.exports.searchArrayByPropertyValue = searchArrayByPropertyValue;
  module.exports.searchArrayByValue = searchArrayByValue;
  module.exports.getIndexKeyNeedleHaystack = getIndexKeyNeedleHaystack;
  module.exports.getArrayByUniqueProperty = getArrayByUniqueProperty;
  module.exports.sortArrayByProperty = sortArrayByProperty;
  module.exports.sortArrayByProperties = sortArrayByProperties;
  module.exports.mergeDeepObject = mergeDeepObject;
  module.exports.mergeObjectProperties = mergeObjectProperties;
  module.exports.mergeObject = mergeObject;
  module.exports.extendObject = extendObject;
  module.exports.createNestedObject = createNestedObject;
  module.exports.makeHashCode = makeHashCode;
  module.exports.numberWithCommas = numberWithCommas;
  module.exports.wordWrap = wordWrap;
  module.exports.removeRepeatedWords = removeRepeatedWords;
  module.exports.dateToIsoDate = dateToIsoDate;
  module.exports.time12to24 = time12to24;
  module.exports.addDuration = addDuration;
  module.exports.getDateParts = getDateParts;
  module.exports.getTimeParts = getTimeParts;
  module.exports.getYearDifferenceFromIsoDate = getYearDifferenceFromIsoDate;
  module.exports.encodeHtmlEntity = encodeHtmlEntity;
  module.exports.decodeHtmlEntity = decodeHtmlEntity;
  module.exports.closestAncestorWithClass = closestAncestorWithClass;
  module.exports.addClass = addClass;
  module.exports.removeClass = removeClass;
  module.exports.toggleClass = toggleClass;
  module.exports.lengthClass = lengthClass;
  module.exports.containsClass = containsClass;
  module.exports.escapeRegularExpression = escapeRegularExpression;
  module.exports.getUrlContent = getUrlContent;
  module.exports.xhrLoadFile = xhrLoadFile;
  module.exports.xhrLoadJSON = xhrLoadJSON;
  module.exports.asyncScriptLoader = asyncScriptLoader;
  module.exports.parseUri = parseUri;
  module.exports.html2fragment = html2fragment;
  module.exports.debounce = debounce;
  module.exports.getBoundingBox = getBoundingBox;
  module.exports.getScrollY = getScrollY;
  module.exports.getPublicIP = getPublicIP;
} // export {
//   hasPropertyValue,
//   deepDelveObject,
//   deepSetObject,
//   findArrayDuplicates,
//   searchArrayByPropertyValue,
//   searchArrayByValue,
//   getIndexKeyNeedleHaystack,
//   getArrayByUniqueProperty,
//   sortArrayByProperty,
//   sortArrayByProperties,
//   mergeDeepObject,
//   mergeObjectProperties,
//   mergeObject,
//   extendObject,
//   createNestedObject,
//   makeHashCode,
//   numberWithCommas,
//   wordWrap,
//   removeRepeatedWords,
//   dateToIsoDate,
//   time12to24,
//   addDuration,
//   getDateParts,
//   getTimeParts,
//   getYearDifferenceFromIsoDate
//   encodeHtmlEntity,
//   decodeHtmlEntity,
//   closestAncestorWithClass,
//   addClass,
//   removeClass,
//   toggleClass,
//   lengthClass,
//   containsClass,
//   escapeRegularExpression,
//   getUrlContent,
//   xhrLoadFile,
//   xhrLoadJSON,
//   asyncScriptLoader,
//   parseUri,
//   html2fragment,
//   debounce,
//   getBoundingBox,
//   getScrollY,
//   getPublicIP
// };
// /* RequireJS */
// if (typeof define !== 'undefined') {
//   define(() => {
//     return Chess;
//   });
// }
// /*
//  * Array Sort on Multiple fields
//  */
// array.sort((a, b) => {
//   // just two
//   if (a[2] < b[2]) {
//     return -1;
//   }
//   if (a[2] > b[2]) {
//     return 1;
//   }
//   return 0;
//   // multiple
//   let value = 0;
//   if (a[2] !== b[2]) {
//     value = a[2] > b[2] ? 1 : -1;
//   }
//   else if (a[1] !== b[1]) {
//     value = a[1] > b[1] ? 1 : -1;
//   }
//   else if (a[0] !== b[0]) {
//     value = a[0] > b[0] ? 1 : -1;
//   }
//   return value;
// });