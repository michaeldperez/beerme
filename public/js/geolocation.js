var failMsg = "BeerMe was unable to acquire your location.";

var success = function(position){
  var lon = '<h3>Longitude: ';
  var lat = '<h3>Latitude: ';
  lon += position.coords.longitude + '</h3>';
  lat += position.coords.latitude + '</h3>';
  $('.longitude').append(lon);
  $('.latitude').append(lat);
}

var fail = function() {
  $('.fail').append(failMsg);
}

$(document).ready(function(){


  $('.locator').on('click', function() {
    navigator.geolocation.getCurrentPosition(success,fail);
  });


})