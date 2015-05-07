function initialize(lat, lon) {
  var mapOptions = {
    center: { lat: lat, lng: lon },
    zoom: 8
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions); // Here's were modal goes.
}

$(document).ready(function(){
  $('.map').on('click', function(event){
    event.preventDefault();
    var lat = ,
        lon = ;
    initialize(lat, lon);
})