function draw_game2(){
  background(color("#81499C"));
  s.show();
  if (s.running){
  s.move();
}
  a.show();
}



function keyPressed2(){
  if (keyCode == 80 && s.running) {
    console.log('paused');
    s.running = false;
}else{
    s.running = true;
  }
  if (keyCode == 32) {
    s.inverse();
  }
  if (keyCode === UP_ARROW) {
    s.chDir('u')
  } else if (keyCode === DOWN_ARROW) {
    s.chDir('d')
  } else if (keyCode === RIGHT_ARROW) {
    s.chDir('r')
  } else if (keyCode === LEFT_ARROW) {
    s.chDir('l')
  }
}

function mousePressed2() {
}
