console.log("JS has loaded!");

//GLOBAL VARIABLES


$(document).ready(function() {
  console.log("the document is ready");


      function race() {
      $(window).on('keydown', function moveRight(event) {
          if(event.keyCode === 81) {
            $('#player1').animate({ 'left': '+=10px' }, 0);
            if('keydown'<= 34);
            alert("winner");
            } else if(event.keyCode === 80) {
            $('#player2').animate({ 'left': '+=10px' }, 0);
          }
        });
      }


  race();

});


//34 keypresses to get to the end of the track.
