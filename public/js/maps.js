$(document).ready(function(){
  $('.map').on('click', function(event){
    event.preventDefault();

    $.ajax({
      url: '/'
    })
  })
})