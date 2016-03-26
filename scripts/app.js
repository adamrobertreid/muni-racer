console.log('Sanity Check: JS is working!');
//variables for players



$(document).on("ready", function() {
  var source   = $("#raceCars").html();
  var template = Handlebars.compile(source);

  var playerOne = new Player ("playerOne",81,0);
  var playerTwo = new Player ("playerTwo",80,0);

  var renderHTML = template({player: playerOne});

  playerOne.move(); // calls player one to move left
  playerTwo.move(); // calls player two to move left

  console.log(playerOne);
  console.log(playerTwo);

$('#path').append(renderHTML);
console.log(renderHTML)
});

function Player (id,keybutton,win){
    this.id = id;
    this.keybutton = keybutton;
    this.win = win;
    this.move = function(){
      $(window).on('keydown',function moveRight(event) {

        if (event.keyCode === keybutton){
          $('#'+id).animate({ "left": "+=20px" }, 0 );
        }
      });
    };
  }
