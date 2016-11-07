// Winston-Noble Adjustment's service area.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: 48.2330, lng: -101.2923},
    mapTypeId: 'terrain'
});

// Define the LatLng coordinates for the polygon's path.
var serviceAreaCoords = [
  {lat: 48.997749, lng: -99.658744}, //NE Canada border
  {lat: 48.892671, lng: -99.657370},  // Hwy 30 & Hwy 4
  {lat: 48.8578, lng: -99.6179}, //Rolla
  {lat: 48.4986, lng: -99.7043}, //Wolford
  {lat: 48.3689, lng: -99.9962}, //Rugby
  {lat: 47.4750, lng: -100.1262}, //Goodrich
  {lat: 47.485468, lng: -100.888301}, //South McClean
  {lat: 47.459013, lng: -100.913020 }, // 200 & 27
  {lat: 47.458668, lng: -101.124850 }, //Underwood
  {lat: 47.503102, lng: -101.174632 }, //200 & 83
  {lat: 47.472478, lng: -101.504908}, //1806 & 200
  {lat: 47.730365, lng: -102.707225}, //Mandaree
  {lat: 47.849842, lng:  -104.0447}, //Fairview, MT
  {lat: 48.988904, lng: -104.033790}, //Elkhorn
  {lat: 48.997749, lng: -99.658744}
];

  // Construct the polygon.
var serviceArea = new google.maps.Polygon({
  paths: serviceAreaCoords,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35
});

serviceArea.setMap(map);

}