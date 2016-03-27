console.log("JS has loaded!");


var count1 = 0;
var count2 = 0;

$(document).ready(function() {
  console.log("the document is ready");

$(".count1").text('Player One ' + count1);
$(".count2").text('Player Two ' + count2);


//Function will alert winner once either players div(car) reaches end of track.
  function winner() {
      if ($('#player1').css('left') === '650px') {
        $('keydown') // working on solution to prevent futher moves from keydown
        alert("Player One Wins!!!");
        count1++;
        console.log("counter1", count1);
      }else if ($('#player2').css('left') === '650px') {
        alert("Player Two Wins!!!");
        count2++;
        console.log("counter 2", count2);
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
