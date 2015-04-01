

$(document).ready(function() {

  $('.favorite').on('click', function(event){
    event.preventDefault();
    var favorite = $(this).parents().find('.name').val();
    debugger
    $.ajax({
      url: '/profile',
      type: 'GET',
      dataType: 'json',
      // data: {param1: 'value1'},
    })
    .done(function() {
      console.log("success");
    })
  });
})


