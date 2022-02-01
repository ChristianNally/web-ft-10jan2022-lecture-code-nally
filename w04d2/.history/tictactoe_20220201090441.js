$(document).ready(function(){

  $('td').click(function(){
    const player = $('#player').html(); // get the contents of that DOM element
    $(this).addClass(player);
    $(this).off('click'); // removes the click handler
    if (player === "X"){ 
      $('#player').html('O'); // set the contents of that DOM element
    } else {
      $('#player').html('X'); // set the contents of that DOM element
    }
  });

});
