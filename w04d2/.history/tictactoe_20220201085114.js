$(document).ready(function(){

  $('td').click(function(){
    const player = $('#player').html(); // get the contents of that DOM element
    $(this).addClass(player);
    if (player === "X"){ // set the contents of that DOM element
      $('#player').html('O'); 
    } else {
      $('#player').html('X');
    }
  });

});
