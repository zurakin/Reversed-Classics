
function draw_game1() {
  background(220);
  for (i=0; i<dots.length; i++){
    dots[i].draw();
  }
  path.draw();
}

function mousePressed1() {
  path.pressed = true;
}

function mouseReleased1() {
  if (array_compare(preview_path.arr, path.arr.reverse())){
    screen = 'preview';
    path.init();
    s.growing += 20;
    s.score+=2;
    if (floor(s.score/3)+1>nb_dots){
      screen = 'game2';
    }else{
      preview_path.init(floor(s.score/3)+1);
    }
  }
  else{
    screen = 'game2';
  }
  path.pressed = false;
}
