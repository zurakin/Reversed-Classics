function displayScore(){
  textSize(2*scl);
  clr = color("#7DB662");
  clr.setAlpha(128 + 128 * sin(millis() / 1000));
  fill(clr);
  text(s.score, w/2 * scl, 2*scl);
}
