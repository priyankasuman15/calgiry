'use strict';

var elements = [];
var positions = [];

function Position(fen) {
  this.id = '';
  this.prefix = 'd-';
  this.fen = fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  this.ascii = 'rnbqkbnr/pppppppp/......../......../......../......../PPPPPPPP/RNBQKBNR';
  this.html = '';
}

ready(function () {
  function iterateElements() {
    for (var i = 0; i < elements.length; ++i) {
      var position = new Position(elements[i].dataset.fen);
      position.id = elements[i].getAttribute('id');
      position.prefix += elements[i].getAttribute('id');
      positions.push(position);
    }
  }

  function buildAscii() {
    for (var i = 0; i < positions.length; ++i) {
      var convert = function convert(match) {
        // let array = Array.from(Array(parseInt(match, 10)), () => '.');
        // return array.join('');
        var array = Array(parseInt(match, 10)).fill('.');
        return array.join('');
      };

      // extract FEN position string only
      var fenString = positions[i].fen.split(' ')[0];
      fenString = fenString.replace(/\//g, '');
      fenString = fenString.replace(/[1-8]{1}/g, convert); // fenString = fenString.replace(/[8]{1}/g, '........');
      // fenString = fenString.replace(/[7]{1}/g, '.......');
      // fenString = fenString.replace(/[6]{1}/g, '......');
      // fenString = fenString.replace(/[5]{1}/g, '.....');
      // fenString = fenString.replace(/[4]{1}/g, '....');
      // fenString = fenString.replace(/[3]{1}/g, '...');
      // fenString = fenString.replace(/[2]{1}/g, '..');
      // fenString = fenString.replace(/[1]{1}/g, '.');

      positions[i].ascii = fenString;
    }
  }

  function buildDiagrams() {
    for (var i = 0; i < positions.length; ++i) {
      positions[i].html = buildDiagram(positions[i].prefix, positions[i].ascii);
    }
  }

  function renderDiagrams() {
    for (var i = 0; i < positions.length; ++i) {
      elements[i].innerHTML = positions[i].html;
    }
  }

  function buildDiagram(prefix, asciiString) {
    var ascii = asciiString.replace(/\//g, '');
    var array = [];

    for (var i = 0; i < ascii.length; ++i) {
      // return string with properly encoded css class for the piece
      var sub = asciiToPiece(ascii[i]).toLowerCase();
      array.push("<span class=\"square ".concat(sub, "\"></span>"));
    }

    return "<div class=\"diagram\" id=\"".concat(prefix, "\">").concat(array.join(''), "</div>");
  }

  function asciiToPiece(string) {
    // return string with properly encoded css class for the piece
    var upper = /[KQRBNP]/;
    var lower = /[kqrbnp]/;
    var piece = upper.test(string) ? 'w' + string : lower.test(string) ? 'b' + string : 'clear';
    return piece;
  }

  function init() {
    elements = document.querySelectorAll('.position');
    elements = Array.from(elements);

    if (elements.length !== 0) {
      iterateElements();
      buildAscii();
      buildDiagrams();
      renderDiagrams();
    }
  }

  init();
}); // .end ready()
// DOCUMENT READY without jQuery, IE9+

function ready(callback) {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}