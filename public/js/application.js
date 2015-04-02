

$(document).ready(function() {

  $('.favorite').on('click', function(event){
    event.preventDefault();
    var favorite = $(event.toElement).closest('ul');
    debugger
    $.ajax({
      url: '/profile',
      type: 'POST',
      dataType: 'json',
      data: {
        venue: favorite.find('.name').html(),
        phone: favorite.find('.phone').html(),
        address: favorite.find('.addy').html(),
        url: favorite.find('.url').html(),
      },
    })
    .done(function(response) {
      debugger
      alert("Venue added to your favorites!")
      window.location.href = response.redirect;
    })
    .fail(function(response){
      debugger
      var errors = JSON.parse(response.responseText).errors
      alert(errors);
    })
  });
})


