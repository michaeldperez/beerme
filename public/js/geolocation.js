var failMsg = "BeerMe was unable to acquire your location.";

var success = function(position){
  var lon = position.coords.longitude.toString();
  var lat = position.coords.latitude.toString();
  console.log(lon);
  console.log(lat);

  var request = $.ajax({
    url: '/users',
    type: 'POST',
    data: { lon: lon, lat: lat },
  });

  request.done(function() {
    console.log("success");
  });
}

var fail = function() {
  alert(failMsg);
}

$(document).ready(function(){


  $('.create_account').on('submit', function(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(success,fail);
  });


})
