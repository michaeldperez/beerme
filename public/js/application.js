

$(document).ready(function() {

  $('.favorite').on('click', function(event){
    event.preventDefault();
    var favorite = $(event.toElement).closest('ul');
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
      alert("Venue added to your favorites!")
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
    var venue = this.closest('ul')
    debugger
    $.ajax({
      url: '/favorites/'+id,
      type: 'DELETE',
      dataType: 'json',
      data: { id: id },
    })
    .done(function(response) {
      venue.remove();
      debugger
      // window.location.href = response.redirect;
    })
    // .fail(function(response) {
    //   var errors = JSON.parse(response.responseText).errors
    //   alert(errors);
  })
})


