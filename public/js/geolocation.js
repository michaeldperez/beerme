var failMsg = "BeerMe was unable to acquire your location.";
var locAppend = $('div.text p');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success,fail);
} else {
  $('.fail').append('<span>' + failMsg + '</span>');
}

var success = function(position){
  var lon = '<h3>Longitude: ';
  var lat = '<h3>Latitude: ';
  lon += position.coords.longitude + '</h3>';
  lat += position.coords.latitude + '</h3>';
  $('.longitude').append(lon);
  $('.latitude').append(lat);
}