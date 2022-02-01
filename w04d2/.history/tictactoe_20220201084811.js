$(document).ready(function(){

  $('td').click(function(){
    const player = $('#player').html();
    $(this).addClass(player);
    if (player === "X"){
      $('#player').html('O');
    }
  });

});
