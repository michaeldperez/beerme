function initialize(name, lat, lon) {
  var location = new google.maps.LatLng(lat, lon);
  var mapOptions = {
    center: location,
    zoom: 18
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions); // Here's were modal will go.

  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: name
  });
}

$(document).ready(function(){
  $('.map').on('click', function(event){
    event.preventDefault();
    var venue = $(event.toElement).closest('li'),
        name = venue.find('.name').html(),
        lat = parseFloat(venue.find('.latitude').html()),
        lon = parseFloat(venue.find('.longitude').html());

    initialize(name, lat, lon);
  });
})