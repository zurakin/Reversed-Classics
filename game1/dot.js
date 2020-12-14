function dot(){
  this.init = function (x, y){
    this.x = x;
    this.y = y;
    this.radius = ball_radius;
    this.original_clr = color('#669199');
    this.clr = color('#669199');
  }

  this.draw = function (){
    strokeWeight(0);
    fill(this.original_clr);
    ellipse(this.x * scl, this.y * scl, this.radius);
  }

  this.draw_selected = function(clr){
    strokeWeight(0);
    fill(clr);
    ellipse(this.x * scl, this.y * scl, this.radius);
  }
}
