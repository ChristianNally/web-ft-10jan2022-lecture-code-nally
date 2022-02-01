$(document).ready(function(){

  function victory(){

    return true;
  };

  $('td').click(function(){
    const player = $('#player').html(); // get the contents of that DOM element
    $(this).addClass(player);
    if (victory($(this))){
      $('td').off('click'); // removes the click handler
      $('h2').html('Winner! <a href="">Play Again!</a>');
    } else {
      $(this).off('click'); // removes the click handler

      if (player === "X"){ 
        $('#player').html('O'); // set the contents of that DOM element
      } else {
        $('#player').html('X'); // set the contents of that DOM element
      }  
    }
  });

});
