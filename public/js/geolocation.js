var failMsg = "BeerMe was unable to acquire your location.";

var success = function(position){
  var form = $('.locatenewuser');
  console.log(form);
  var lon = position.coords.longitude.toString();
  var lat = position.coords.latitude.toString();
  var request = $.ajax({
    url: '/users',
    type: 'POST',
    data: {
        lon: lon,
        lat: lat,
        user: {
        first_name: form.find('.createfn').val(),
        last_name: form.find('.createln').val(),
        email: form.find('.createm').val(),
        password: form.find('.createpw').val(),
      }
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
