console.log("JS has loaded!");

var keyQ = 81; //key assigned to player one is Q
var keyP = 80;//key assigned to player two is P

$(document).ready(function() {
  console.log("the document is ready");

  race();
  $(".btn").on("click", function resetWholeGame(event){
    window.location.reload();
});

//Function will alert winner once either players div(car) reaches end of track.
  function winner() {
      if ($('#player1').css('left') === '610px') {
        alert("Player One Wins!!!");
      }else if ($('#player2').css('left') === '610px') {
        alert("Player Two Wins!!!");

      }
    }

//Function event listener works by moving div after certain keys are pressed
      function race() {
      $(window).on('keydown', function moveRight(event) {
          if(winner());
          if(event.keyCode === keyQ) {
            $('#player1').animate({ 'left': '+=10px' }, 0);
          } else if(event.keyCode === keyP) {
            $('#player2').animate({ 'left': '+=10px' }, 0);
          }
      });
    }
});
