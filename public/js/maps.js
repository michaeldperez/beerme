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
    var venue = $(event.toElement).closest('li'),
        lat = venue.find('.latitude').html(),
        lon = venue.find('.longitude').html();
    initialize(lat, lon);
})