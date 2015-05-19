

$(document).ready(function() {

  $('.favorite').on('click', function(event){
    event.preventDefault();
    var favorite = $(event.toElement).closest('li');
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
      alert(response.venue + " added to your favorites!")
      window.location.href = response.redirect;
    })
    .fail(function(response){
      var errors = JSON.parse(response.responseText).errors
      alert(errors);
    })
  });



  $('.remove').on('click', function(event){
    event.preventDefault();
    var id = this.id;
    var venue = this.closest('li');
    $.ajax({
      url: '/favorites/'+id, // This needs to be users/id/favorites/id
      type: 'DELETE',
      dataType: 'json',
      data: { id: id },
    })
    .done(function(response) {
      venue.remove();
    })
    .fail(function(response){
      var errors = JSON.parse(response.responseText).errors
      alert(errors);
    })
  })
})


