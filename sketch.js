var screen = "menu";
let username = "";
var dataBase;
var reference;
var leaderBoard;

function preload(){
  apple_img = loadImage('https://i.imgur.com/2EOXYAA.png');
  berry_img = loadImage('https://i.imgur.com/r1gTiiW.png');
  snake_img = loadImage('https://i.imgur.com/mOi52wR.png');
  // font = loadFont('fonts/ot/karma_future.otf');
}

function setup() {
  // textFont(font);
  leaderBoard = [];
  h = 16;
  w = 26;
  scl = floor(0.8*windowWidth/26);
  speed = floor(windowWidth/640);
  scl = scl-(scl%(speed*4));
  scl2 = floor(scl/10)+2;
  createCanvas(w * scl, h*scl);
  ball_radius = 30;
  dots = [];
  //creating dots objects
  angle = 0;
  nb_dots = 8;
  for(i=0; i<nb_dots; i++){
    dots.push(new dot());
    x = 13 + cos(angle)*7;
    y = 8 + sin(angle)*7;
    dots[i].init(x, y);
    angle+=TWO_PI/nb_dots;
  }

  //creating and initialising other objects
  preview_path = new preview_path();
  preview_path.init(2);
  path = new path();
  path.init();
  window.looping = true;
  s = new Snake();
  s.init(floor(w/2)*scl, floor(h/2)*scl);
  a = new Apple();
  a.init();
  //intialising firebase
  var firebaseConfig = {
    apiKey: "AIzaSyCoBcU7lTQdIjp8UN084HUzGQTYWl8HZEo",
    authDomain: "reverse-b5412.firebaseapp.com",
    databaseURL: "https://reverse-b5412-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reverse-b5412",
    storageBucket: "reverse-b5412.appspot.com",
    messagingSenderId: "295468152793",
    appId: "1:295468152793:web:e30233f0d7d2080e75cbc8",
    measurementId: "G-6ZD5GBLE5J"
  };

  firebase.initializeApp(firebaseConfig);
  dataBase = firebase.database(); // intialising database
  firebase.analytics();
  reference = dataBase.ref("scores");
  reference.on('value',getData,errData);
  for (i = 0; i < count; i++) {
    drops.push(new rainDrop());
  }

}

function draw() {
  switch (screen){
    case 'menu':
      draw_menu();
      break;
    case 'game1':
      draw_game1();
      break;
    case 'game2':
      draw_game2();
      break;
    case 'preview':
      draw_preview();
      break;
  }
}

function keyPressed(){
   switch (screen){
      case 'game2':
        keyPressed2();
        break;
      case 'menu':
        if(key=='Backspace'){
            username=username.substring(0,username.length-1);
        }else if(key.length==1){
          username+=key;
        }else if(key=="Enter" && username.length>0){
          screen = 'preview';
  }
  }
}

function mousePressed(){
  switch (screen){
    case 'game1':
      mousePressed1();
      break;
  }
}


function mouseReleased() {
  switch (screen){
    case 'game1':
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
