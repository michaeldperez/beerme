var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize(startLat, startLon) {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(startLat, startLon)
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directions-panel'));

  // var control = document.getElementById('control');
  // control.style.display = 'block';
  // map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
}

function calcRoute(startLat, startLon, venue_destination) {
  var start = new google.maps.LatLng(startLat, startLon);
  var end = venue_destination;
  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

// google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){
  $('.map').on('click', function(event){
    event.preventDefault();
    var venue = $(event.toElement).closest('li'),
        name = venue.find('.name').html(),
        address = venue.find('.addy').html(),
        venue_destination = name + ',' + address, // Using this.
        endLat = parseFloat(venue.find('.latitude').html()), // not this.
        endLon = parseFloat(venue.find('.longitude').html()); // and not this.
    $.ajax({
      url: '/location',
      type: 'GET',
      dataType: 'json'
    })
    .done(function(response){
      $('#directions-panel').html('');
      initialize(response.startLat, response.startLon);
      // calcRoute(response.startLat, response.startLon, endLat, endLon);
      calcRoute(response.startLat, response.startLon, venue_destination);
    })
  });
})
