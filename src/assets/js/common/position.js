'use strict';




let elements = [];
const positions = [];


function Position(fen) {

  this.id = '';
  this.prefix = 'd-';
  this.fen = fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  this.ascii = 'rnbqkbnr/pppppppp/......../......../......../......../PPPPPPPP/RNBQKBNR';
  this.html = '';
}




ready(() => {


  function iterateElements() {

    for (let i = 0; i < elements.length; ++i) {
      const position = new Position(elements[i].dataset.fen);
      position.id = elements[i].getAttribute('id');
      position.prefix += elements[i].getAttribute('id');

      positions.push(position);
    }
  }


  function buildAscii() {

    for (let i = 0; i < positions.length; ++i) {
      // extract FEN position string only
      let fenString = positions[i].fen.split(' ')[0];
      fenString = fenString.replace(/\//g, '');

      function convert(match) {

        // let array = Array.from(Array(parseInt(match, 10)), () => '.');
        // return array.join('');

        const array = Array(parseInt(match, 10)).fill('.');
        return array.join('');
      }

      fenString = fenString.replace(/[1-8]{1}/g, convert);
      // fenString = fenString.replace(/[8]{1}/g, '........');
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

    for (let i = 0; i < positions.length; ++i) {
      positions[i].html = buildDiagram(positions[i].prefix, positions[i].ascii);
    }
  }


  function renderDiagrams() {

    for (let i = 0; i < positions.length; ++i) {
      elements[i].innerHTML = positions[i].html;
    }
  }


  function buildDiagram(prefix, asciiString) {

    const ascii = (asciiString).replace(/\//g, '');
    const array = [];

    for (let i = 0; i < ascii.length; ++i) {
      // return string with properly encoded css class for the piece
      const sub = asciiToPiece(ascii[i]).toLowerCase();
      array.push(`<span class="square ${sub}"></span>`);
    }

    return `<div class="diagram" id="${prefix}">${array.join('')}</div>`;
  }


  function asciiToPiece(string) {
    // return string with properly encoded css class for the piece
    const upper = /[KQRBNP]/;
    const lower = /[kqrbnp]/;
    const piece = (upper.test(string)) ? 'w' + string : (lower.test(string)) ? 'b' + string : 'clear';

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
  }
  else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}
