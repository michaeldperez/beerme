var failMsg = "BeerMe was unable to acquire your location.";

var success = function(position){
  var lon = position.coords.longitude;
  var lat = position.coords.latitude;


  var request = $.ajax({
    url: '/users',
    type: 'POST',
    data: { lat: lat, lon: lon },
  });

  request.done(function() {
    console.log("success");
  });
}

var fail = function() {
  console.log(failMsg);
}

$(document).ready(function(){


  $('.locatenewuser').on('click', function(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(success,fail);
  });


})
