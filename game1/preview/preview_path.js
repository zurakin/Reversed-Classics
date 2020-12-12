function preview_path(){


  this.init = function(n){
    this.arr = [];
    this.visited = [];
    this.n = n;
    this.clr = color('#996E66');
    for (i=0; i<this.n; i++){
      do{
        x = floor(random(0, dots.length));
      }while(this.visited.includes(x))
      this.visited.push(x);
      this.arr.push([dots[x].x*scl, dots[x].y*scl]);
    }
    this.iterations = 40;
    this.progress = 0;
  }


  this.draw = function(){
    fill(this.clr);
    stroke(this.clr);
    strokeWeight(10);
    if (this.progress<this.n-1){
      x1 = this.arr[floor(this.progress)][0];
      y1 = this.arr[floor(this.progress)][1];
      tales_coeff = this.progress-floor(this.progress);
      x2 = this.arr[floor(this.progress)+1][0];
      y2 = this.arr[floor(this.progress)+1][1];
      line(x1, y1, x1 + tales_coeff * (x2-x1), y1 + tales_coeff * (y2-y1));
      this.progress+=1/this.iterations;
    }else{
      screen = 1
    };
    dots[this.visited[0]].draw_selected(this.clr);
    for (i=0; i<floor(this.progress); i++){
      dots[this.visited[i+1]].draw_selected(this.clr);
      fill(this.clr);
      stroke(this.clr);
      strokeWeight(10);
      line(this.arr[i][0], this.arr[i][1], this.arr[i+1][0], this.arr[i+1][1]);
    }
  }
}
