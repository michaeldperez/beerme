

$(document).ready(function() {

  var entryPoints = ['.login', '.signup'];

  entryPoints.forEach(function(entry){
    $(entry).on('click', function(event) {
      event.preventDefault();
      $('.addedContent')[0].scrollIntoView({block: 'end', behavior: 'smooth'});
      if (entry === '.login'){
        $('.form-title-si').slideDown();
        $('.locateuser').slideDown();
      } else {
        $('.form-title-su').slideDown();
        $('.locatenewuser').slideDown();
      }
    });
  });

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
      $.modal("<div class='fav-modal'><h3>"+response.venue+" added to your favorites</h3></div>");
      setTimeout($.modal.close, 5000);
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


