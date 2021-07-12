'use strict';

var regex = [{
  name: 'credit_card',
  regex: /(^(4|5)\d{3}-?\d{4}-?\d{4}-?\d{4}|(4|5)\d{15})|(^(6011)-?\d{4}-?\d{4}-?\d{4}|(6011)-?\d{12})|(^((3\d{3}))-\d{6}-\d{5}|^((3\d{14})))/img,
  description: 'Matches Credit Card numbers',
  error: 'Invalid Credit Card: format incorrect',
  tags: 'creditcard'
}, {
  name: 'date_yyyy-mm-dd',
  regex: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
  description: 'Matches Dates in YYYY-MM-DD format ( /-)',
  error: 'Invalid Date: must be in YYYY-MM-DD format ( /-)',
  tags: 'date'
}, {
  name: '_date_dd-mm-yyyy',
  regex: /^(0?[1-9]|[12][0-9]|3[01])([ /\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])$/,
  description: 'Matches Dates in DD-MM-YYYY format ( /-)',
  error: 'Invalid Date: must be in DD-MM-YYYY format ( /-)',
  tags: 'date'
}, {
  name: 'time_24hhmm',
  regex: /^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/,
  description: 'Matches Time in ##:## 24 hour format',
  error: 'Invalid Time: must be in ##:## 24 hour format',
  tags: 'time'
}, {
  name: 'time_24hhmmss',
  regex: /^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/,
  description: 'Matches Time in ##:##:## 24 hour format',
  error: 'Invalid Time: must be in ##:##:## 24 hour format',
  tags: 'time'
}, {
  name: '_time_24hm',
  regex: /([01]?[0-9]|2[0-3]):[0-5][0-9]/,
  description: 'Matches Time in ##:## 24 hour format',
  error: 'Invalid Time: must be in 24 hour format',
  tags: 'time'
}, {
  name: '_time_iso-8601',
  regex: /^(?![+-]?\d{4,5}-?(?:\d{2}|W\d{2})T)(?:|(\d{4}|[+-]\d{5})-?(?:|(0\d|1[0-2])(?:|-?([0-2]\d|3[0-1]))|([0-2]\d{2}|3[0-5]\d|36[0-6])|W([0-4]\d|5[0-3])(?:|-?([1-7])))(?:(?!\d)|T(?=\d)))(?:|([01]\d|2[0-4])(?:|:?([0-5]\d)(?:|:?([0-5]\d)(?:|\.(\d{3})))(?:|[zZ]|([+-](?:[01]\d|2[0-4]))(?:|:?([0-5]\d)))))$/,
  description: 'Matches Date/Time in ISO-8601 format (excludes durations)',
  error: 'Invalid Date/Time: must be in ISO-8601 format (excludes durations)',
  tags: 'date,time'
}, {
  name: 'email',
  regex: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
  description: 'Matches eMail Addresses',
  error: 'Invalid eMail: format incorrect',
  tags: 'email'
}, {
  name: '_email',
  regex: /^.+@.+$/,
  description: 'Matches eMail Addresses',
  error: 'Invalid eMail: format incorrect',
  tags: 'email'
}, {
  name: '__email',
  regex: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/,
  description: 'Matches eMail Addresses',
  error: 'Invalid eMail: format incorrect',
  tags: 'email'
}, {
  name: 'ipv4',
  regex: /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
  description: 'Matches IPv4 Addresses',
  error: 'Invalid IPv4 Address: format incorrect',
  tags: 'tcpip'
}, {
  name: '_ipv4',
  regex: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  description: 'Matches IPv4 Addresses',
  error: 'Invalid IPv4 Address: format incorrect',
  tags: 'tcpip'
}, {
  name: '_ipv6',
  regex: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  description: 'Matches IPv6 Addresses',
  error: 'Invalid IPv6 Address: format incorrect',
  tags: 'tcpip'
}, {
  name: 'url_1',
  regex: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
  description: 'Matches HTTP(s)/FTP(s) URL',
  error: 'Invalid URL: format incorrect',
  tags: 'url,http,ftp'
}, {
  name: 'url_2',
  regex: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/img,
  description: 'Matches HTTP(s)/FTP(s) URL',
  error: 'Invalid URL: format incorrect',
  tags: 'url,http,ftp'
}, {
  name: 'url_linkify',
  regex: /(\()((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\))|(\[)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\])|(\{)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(\})|(<|&(?:lt|#60|#x3c);)((?:ht|f)tps?:\/\/[a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]+)(>|&(?:gt|#62|#x3e);)|((?:^|[^=\s'"\]])\s*['"]?|[^=\s]\s+)(\b(?:ht|f)tps?:\/\/[a-z0-9\-._~!$'()*+,;=:\/?#[\]@%]+(?:(?!&(?:gt|#0*62|#x0*3e);|&(?:amp|apos|quot|#0*3[49]|#x0*2[27]);[.!&',:?;]?(?:[^a-z0-9\-._~!$&'()*+,;=:\/?#[\]@%]|$))&[a-z0-9\-._~!$'()*+,;=:\/?#[\]@%]*)*[a-z0-9\-_~$()*+=\/#[\]@%])/img,
  description: 'Matches HTTP(s)/FTP(s) URL',
  error: 'Invalid URL: format incorrect',
  tags: 'url,http,ftp'
}, {
  name: '_url',
  regex: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  description: 'Matches HTTP(s) URL with optional protocol',
  error: 'Invalid URL: format incorrect',
  tags: 'url,http'
}, {
  name: 'onlynumberspace',
  regex: /^[0-9\ ]+$/,
  description: 'Validates Numbers and Spaces',
  error: 'Invalid: must contain only numbers and spaces',
  tags: 'validation'
}, {
  name: 'onlyletterspace',
  regex: /^[a-zA-Z\ \']+$/,
  description: 'Validates Letters and Spaces',
  error: 'Invalid: must contain only letters and spaces',
  tags: 'validation'
}, {
  name: 'onlyletternumber',
  regex: /^[0-9a-zA-Z]+$/,
  description: 'Validates Letters and Numbers',
  error: 'Invalid: must contain only letters and numbers',
  tags: 'validation'
}, {
  name: 'password',
  regex: /^(\w*(?=\w*\d)(?=\w*[a-z])(?=\w*[A-Z])\w*)$/,
  description: 'Validates Passwords',
  error: 'Invalid Password: requires at least one uppercase, one lowercase, and one number character',
  tags: 'validation'
}, {
  name: '_password',
  regex: /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
  description: 'Validates Passwords',
  error: 'Invalid Password: must be between 6 and 10 characters, and requires at least one uppercase, one lowercase, one number, and one special character',
  tags: 'validation'
}, {
  name: 'username',
  regex: /^[a-zA-Z0-9_-]{3,16}$/,
  description: 'Validates Usernames',
  error: 'Invalid Username: must have between 3 and 16 characters, allowing alphanumeric characters, hyphens and underscores',
  tags: 'validation'
}, {
  name: 'phone',
  regex: /^[0-9]{3}[- .]*[0-9]{3}[- .]*[0-9]{4}$/,
  description: 'Matches Phone Numbers',
  error: 'Invalid Phone Number: must be in 123.456.7890 format',
  tags: 'phone'
}, {
  name: 'postalcode',
  regex: /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/,
  description: 'Matches Postal Codes',
  error: 'Invalid Postal Code',
  tags: 'address,postalcode'
}, {
  name: 'zipcode',
  regex: /(^\d{5}(-\d{4})?$)/,
  description: 'Matches US ZIP, ZIP+4 Codes',
  error: 'Invalid ZIP Code',
  tags: 'address,zipcode'
}, {
  name: 'integer',
  regex: /^[\-\+]?\d+$/,
  description: 'Matches Integers',
  error: 'Invalid: must be integer',
  tags: 'number'
}, {
  name: 'number',
  regex: /^[\-\+]?(([0-9]+)([\.,]([0-9]+))?|([\.,]([0-9]+))?)$/,
  description: 'Matches Numbers',
  error: 'Invalid: must be a number',
  tags: 'number'
}, {
  name: '_hexcolor',
  regex: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
  description: 'Matches RGB hex colors',
  error: 'Invalid: must be hex color code',
  tags: 'hex,color'
}, {
  name: '_morse_code',
  regex: /^[.-]{1,5}(?:[ \t]+[.-]{1,5})*(?:[ \t]+[.-]{1,5}(?:[ \t]+[.-]{1,5})*)*$/,
  description: 'Matches Morse Code',
  error: 'Invalid: must be in morse code',
  tags: 'morse,code'
}, {
  name: '_html_tag',
  regex: /^<([a-z1-6]+)([^<]+)*(?:>(.*)<\/\1>| *\/>)$/,
  description: 'Matches opening and closing HTML tags with content between',
  error: 'Invalid: must be HTML tag',
  tags: 'markup,html,xml,tags'
}, {
  name: 'line_ending',
  regex: /(?:\n|\r\n|\r)/g,
  description: 'Matches line endings in (file|string) input',
  error: 'Invalid: must be single line of input',
  tags: 'parsing'
}];
module.exports = regex;