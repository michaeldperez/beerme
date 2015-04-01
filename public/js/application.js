

$(document).ready(function() {

  $('.favorite').on('click', function(event){
    event.preventDefault();
    var favorite = $(this).parents()
    $.ajax({
      url: '/profile',
      type: 'POST',
      dataType: 'json',
      data: {
        venue: favorite.find('.name').val(),
        phone: favorite.find('.phone').val(),
        address: favorite.find('.addy').val(),
        url: favorite.find('.url').val(),
      },
    })
    .done(function(response) {
      window.location.href = response.redirect;
    })
    .fail(function(response){
      errors = JSON.parse(response.responseText).errors
      alert(errors);
    })
  });
})


