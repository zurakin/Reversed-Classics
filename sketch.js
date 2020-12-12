var scl = 30;
var h = 16;
var w = 26;
var screen = 3;
//High score
let high_scores = game.querySelector("section#game ol.high-scores");

function preload(){
  apple_img = loadImage('https://i.imgur.com/2EOXYAA.png');
  berry_img = loadImage('https://i.imgur.com/r1gTiiW.png');
  snake_img = loadImage('https://i.imgur.com/mOi52wR.png');
}

function setup() {
  createCanvas(w * scl, h*scl);
  r = 30;
  dots = [];
  //creating dots objects
  for (i=0; i<3; i++){
    dots.push(new dot());
    dots[dots.length-1].init(i*6 + 6, h/2-4)
    dots.push(new dot());
    dots[dots.length-1].init(i*6 + 6, h/2)
    dots.push(new dot());
    dots[dots.length-1].init(i*6 + 6, h/2+4)
  }

  //creating and initialising other objects
  preview_path = new preview_path();
  preview_path.init(2);
  path = new path();
  path.init();
  window.looping = true;
  s = new Snake();
  s.init(width/2, height/2);
  a = new Apple();
  a.init();
  HighScores();
}

function draw() {
  switch (screen){
    case 1:
      draw_game1();
      break;
    case 2:
      draw_game2();
      break;
    case 3:
      draw_preview();
      break;
  }
}

function keyPressed(){
   switch (screen){
      case 2:
        keyPressed2();
        break;
  }
}

function mousePressed(){
  switch (screen){
    case 1:
      mousePressed1();
      break;
  }
}


function mouseReleased() {
  switch (screen){
    case 1:
      mouseReleased1();
      break;
    }
}


function array_compare(a1, a2) {
 if(a1.length != a2.length) {
  return false;
 }
 for(var i in a1) {
  // Don't forget to check for arrays in our arrays.
  if(a1[i] instanceof Array && a2[i] instanceof Array) {
   if(!array_compare(a1[i], a2[i])) {
    return false;
   }
  }
  else if(a1[i] != a2[i]) {
   return false;
  }
 }
 return true;
}
