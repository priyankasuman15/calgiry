'use strict';


exports.plugin = {

  name: 'Server Methods',
  version: '0.0.1',
  // multiple: true,
  // dependencies: '',
  // once: '',
  // pkg: '',

  // how to pass server or request object to view helpers
  // https://github.com/hapijs/vision/issues/112

  register: function (server, options) {

    // http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    server.method('numberWithCommas', (number) => {

      // return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      // // for numbers with more than three (3) places after the decimal
      const parts = number.toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');
    });


    server.method('getIndexKeyNeedleHaystack', (key, needle, haystack) => {

      return haystack.map((e) => {

        return e[key];
      }).indexOf(needle);
    });


    // https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
    server.method('makeHashCode', (string) => {

      let hash = 0;
      let chr;
      if (string.length === 0) {
        return hash;
      }

      for (let i = 0; i < string.length; ++i) {
        chr = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // convert to 32bit integer
      }

      return Math.abs(hash);
    });


    // https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
    server.method('dateToIsoDate', (date = new Date()) => {

      return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toJSON().slice(0, 10);
    });


    // https://stackoverflow.com/questions/8152426/how-can-i-calculate-the-number-of-years-betwen-two-dates
    server.method('getYearDifferenceFromIsoDate', (isoDate) => {

      const millisecondsDate = Date.now() - new Date(isoDate);
      const differenceDate = new Date(millisecondsDate);

      return Math.abs(differenceDate.getUTCFullYear() - 1970);
    });


    // given an ISO formatted date, e.g. '2019-03-16', returns an object with year, month, date as integers
    server.method('getDateParts', (isoDate) => {

      const parts = isoDate.split('-');

      return {
        year: parseInt(parts[0]),
        month: parseInt(parts[1]),
        day: parseInt(parts[2])
      };
    });


    // given a time string, e.g. '17:45', returns an object with hours, minutes as integers
    server.method('getTimeParts', (timeString) => {

      const parts = timeString.split(':');

      return {
        hours: parseInt(parts[0]),
        minutes: parseInt(parts[1])
      };
    });


    // http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
    /**
     * merge property keys of two objects recursively
     *
     * @param {object} target - target object to be updated
     * @param {object} source - source object to be merged
     * @example
     * @returns {object} - returns target object with properties of source object merged
     */
    server.method('mergeObjectProperties', (target, source) => {

      for (const p in source) {
        try {
          // update value if property in destination object is already set
          if (source[p].constructor === Object) {
            target[p] = mergeObjectProperties(target[p], source[p]);
          }
          else {
            target[p] = source[p];
          }
        }
        catch (e) {
          // create and set property value in destination object if it does not exist
          target[p] = source[p];
        }
      }

      return target;
    });

  }

};
