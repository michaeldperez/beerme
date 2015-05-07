function initialize(name, lat, lon) {
  var location = new google.maps.LatLng(lat, lon);
  var mapOptions = {
    center: location,
    zoom: 18
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions); // Here's were modal will go.
  var beerIcon = "../images/beer-icon.png"
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: name,
    icon: beerIcon
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

  $('.directions').on('click', function(event){
    event.preventDefault();
    var venue = $(event.toElement).closest('li'),
        dlat = parseFloat(venue.find('.latitude').html()),
        dlon = parseFloat(venue.find('.longitude').html());
    $.ajax({
      url: '/directions',
      type: 'POST',
      dataType: 'json',
      data: { destination: {
        dlat: dlat,
        dlon: dlon
        }
      }
    })
    .done(function(response){
      console.log("sucess");
    })
  });
})