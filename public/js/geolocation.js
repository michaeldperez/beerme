var failMsg = "BeerMe was unable to acquire your location.";

var success = function(position){
  var form = $(this);
  var lon = position.coords.longitude.toString();
  var lat = position.coords.latitude.toString();

  var request = $.ajax({
    url: '/users',
    type: 'POST',
    data: {
        lon: lon,
        lat: lat,
        user: {
        email: form.find('....').val(),
        email: form.find('....').val(),
        email: form.find('....').val(),
        email: form.find('....').val(),
        email: form.find('....').val(),
    },
  });

  request.done(function(response) {

    window.location.href = response.redirect
  });

  request.fail(function(response){
    errors = JSON.parse(response.responseText).errors
    alert(errors);
  })
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
