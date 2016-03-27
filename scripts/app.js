console.log("JS has loaded!");




$(document).ready(function() {
  console.log("the document is ready");

//Function will alert winner once either players div(car) reaches end of track.
  function winner() {
      if ($('#player1').css('left') === '650px') {
        alert("Player One Wins!!!");
      }else if ($('#player2').css('left') === '650px') {
        alert("Player Two Wins!!!");
      }
    }
//Function event listener works by moving div after certain keys are pressed
      function race() {
      $(window).on('keydown', function moveRight(event) {
          if(winner());
          if(event.keyCode === 81) {
            $('#player1').animate({ 'left': '+=10px' }, 0);
            } else if(event.keyCode === 80) {
            $('#player2').animate({ 'left': '+=10px' }, 0);
          }
        });
      }


  race();

});
