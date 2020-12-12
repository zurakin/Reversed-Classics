
function draw_preview(){
  background(220);
  for (i=0; i<dots.length; i++){
    dots[i].draw();
  }
  preview_path.draw();
}
