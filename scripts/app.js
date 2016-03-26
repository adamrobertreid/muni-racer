console.log('Sanity Check: JS is working!');
//variables for players



$(document).on("ready", function() {

  var playerOne = new Player (81,0);
  var playerTwo = new Player (80,0);

  playerOne.move(); // calls player one to move left
  playerTwo.move(); // calls player two to move left

  console.log(playerOne);
  console.log(playerTwo);


});

function Player (keybutton,win){
    this.keybutton = keybutton;
    this.win = win;
    this.move = function(){
      $(window).on('keydown',function moveRight(event) {
        var car1 = ("#player1");
        var car2 = ("")
        if (event.keyCode === keybutton){
          $(cars).animate({ "left": "+=50px" }, "slow" );
        }
      });
    };
  }
