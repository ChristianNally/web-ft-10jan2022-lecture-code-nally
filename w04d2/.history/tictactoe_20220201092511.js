$(document).ready(function(){

  const player = $('#player').html();

  function victory($clickedElement){
    const $row = $clickedElement.parent();
    const player = $('#player').html();

    let rowWin = true;
    $row.children().each(function(){
      if (  !$(this).hasClass(player)  ){
        rowWin = false;
      }
    });

    return rowWin;
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
