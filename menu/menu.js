let MENU = 0
var r = 100;
var growing = true;
var count = 500;
var drops = [];


function draw_menu() {
  background(123, 137, 147);
  fill(254, 252, 215);
  ellipse(0, 0, r);
  if (frameCount % 7 == 0) {
    if (r == 150) {
      growing = false
    } else if (r == 50) {
      growing = true
    }
    if (growing) {
      r++
    } else {
      r--
    }
  }
  for (i = 0; i < count; i++) {
    drops[i].show();
    drops[i].move();
    display = username;
    if (display.length==0){
      display = "...";
    }
    if (frameCount%60>=30){
      display = '';
    }
  }
  textSize(scl);
  text("Username: "+display, 3*scl, 3*scl);
  text("Gamesicaen 2020 - The Newbies", 6*scl, 1*scl);
  displayleader();
}
// width 26 height 16
function displayleader(){
  text("LEADERBOARD" , 3*scl,5*scl);
  textSize(scl/2);
  if (leaderBoard != null){
    if (leaderBoard.length != 0){
    for ( var i = 0; i <10; i++){
    var textdata = "-" + leaderBoard[i][0] + " : "+leaderBoard[i][1];
    text(textdata, (4)*scl,(6+i)*scl);
  }
}
}
}
