function path(){
  this.init = function (){
    this.arr = [];
    this.clr = color('#996E66');
    this.pressed = false;
  }

  this.draw = function(){
      if (this.pressed){
        fill(this.clr);
        stroke(this.clr);
        strokeWeight(10);
        for (i=0; i<dots.length; i++){
          if (dist(dots[i].x*scl, dots[i].y*scl, mouseX, mouseY)<r){
            dots[i].clr = this.clr;
            adding = true;
            for (j=0; j<this.arr.length; j++){
              if (dots[i].x *scl==this.arr[j][0] && dots[i].y *scl==this.arr[j][1]){
                adding = false;
                break;
              }
            }
            if (adding){
              this.arr.push([dots[i].x *scl, dots[i].y *scl]);
            }
            }
          }


        for (i=0; i<this.arr.length-1; i++){
          line(this.arr[i][0], this.arr[i][1], this.arr[i+1][0], this.arr[i+1][1]);
        }
      l = this.arr.length;
      if (l>0){
      line(this.arr[l-1][0], this.arr[l-1][1], mouseX, mouseY);
    }
    }else{
      for (i=0; i<dots.length; i++){
        dots[i].clr = dots[i].original_clr;
        this.arr = [];
      }
    }
  }
}
