$(document).ready(function(){

  $('td').click(function(){
    const player = $('#player').html(); // get the contents of that DOM element
    $(this).addClass(player);
    if (player === "X"){
      $('#player').html('O'); // set the contents of that DOM element
    }
  });

});
