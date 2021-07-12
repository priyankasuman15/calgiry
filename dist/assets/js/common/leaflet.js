'use strict';
/*
  global xhrLoadJSON, L
*/
// DOCUMENT READY without jQuery, IE9+

function ready(callback) {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
} // DOCUMENT READY usage, run code in callback


ready(function () {
  xhrLocations();
}); // GLOBAL VARIABLES
//
// geojson resources

var calgary;
var locations; // SETUP
//

function xhrLocations() {
  // load location data
  xhrLoadJSON(['../../json/locations.json'], 1000, getLocations);
}

function getLocations() {
  locations = this[0];
  calgary = locations.features[0];
  makeMap(calgary);
} // LEAFLET
//


var map;
var marker;
var boundaries = [[51.33576, -114.536591], [51.33576, -113.904877], [50.915156, -113.904877], [50.915156, -114.536591]];

function drawMapMarker(location) {
  // remove any existing markers
  if (marker !== undefined) {
    map.removeLayer(marker);
  }

  var lat = location.geometry.geometries[0].coordinates[1] || 51.083067;
  var lon = location.geometry.geometries[0].coordinates[0] || -113.995535;
  boundaries.push([lat, lon]);
  var props = location.properties;
  marker = L.marker([lat, lon]).addTo(map);
  marker.bindPopup("".concat(props.venue));
  marker.openPopup();
}

function makeMap(location) {
  var mapid = 'footer';
  var element = document.querySelector("#leaflet-".concat(mapid));
  element.style.position = 'relative';
  element.style.width = '100%';
  element.style.height = '100%';
  element.style.zIndex = 1;
  var lat = location.geometry.geometries[0].coordinates[1];
  var lon = location.geometry.geometries[0].coordinates[0];
  var token = 'pk.eyJ1IjoiZGVlcGVyYmx1ZTY0IiwiYSI6ImNqY2pvbXVqcTMwMnIycXBnbGpnMDFub3QifQ.QkVqFaNNWv_-uTTJz-HR2A';
  map = L.map("leaflet-".concat(mapid), {
    zoomControl: false,
    maxBounds: boundaries
  }).fitBounds(boundaries).setView([lat, lon], 12);
  L.control.zoom({
    position: 'topright'
  }).addTo(map); // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
  // L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  // L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roadsg/x={x}&y={y}&z={z}', {
  // L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    // attribution: '',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: token
  }).addTo(map); // add map marker for ccc location

  drawMapMarker(location);
  map.on('drag', function () {
    map.panInsideBounds(boundaries);
  }); // // shows lat/lon when map is clicked
  // map.on('click', (e) => {
  //   const popup = L.popup();
  //   popup
  //     .setLatLng(e.latlng)
  //     .setContent(e.latlng.toString())
  //     .openOn(map);
  // });
}