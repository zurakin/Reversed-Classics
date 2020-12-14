function Snake() {
  this.init = function(x, y) {
    this.x = x;
    this.y = y;
    this.queue = [];
    this.hc = [100, 150, 40];
    this.bc = [100, 156, 73, 200];
    this.dir = 'u';
    this.speed = speed*2;
    this.body = [];
    this.growing = 10;
    this.score = 1;
    this.invincible = false;
    this.running = false;
  }

  this.quantified = function (){
  return (this.x%scl == 0 && this.y%scl == 0 && this.queue.length >0);
  }

  this.inverse = function () {
    this.x = this.body[0][0];
    this.y = this.body[0][1];
    px = this.body[1][0];
    py = this.body[1][1];
    this.body.reverse();
    if (this.x<px){
      this.dir = 'l';
    }else if (this.x>px){
      this.dir = 'r';
    }else if (this.y>py){
      this.dir = 'd';
    }else{
      this.dir = 'u';
    }
  }

  this.show = function () {
    displayScore();
    noStroke();
    fill(this.bc);
    try{
    for (var i = 0; i<this.body.length; i+=1){
      rect(this.body[i][0]+scl2, this.body[i][1]+scl2, scl-scl2*2, scl-scl2*2, 20);
    };
    push();
    translate(this.x+scl/2, this.y+scl/2);
    if (this.dir == 'l'){
      rotate(PI / 2.0);
      imageMode(CENTER);
      image(snake_img, 0, 0, scl+scl2*2, scl+scl2*2);
      rotate(-PI / 2.0);
    }else if (this.dir == 'r'){
      rotate(3*PI / 2.0);
      imageMode(CENTER);
      image(snake_img, 0, 0, scl+scl2*2, scl+scl2*2);
      rotate(-3*PI / 2.0);
    }else if (this.dir =='u'){
      rotate(PI);
      imageMode(CENTER);
      image(snake_img, 0, 0, scl+scl2*2, scl+scl2*2);
      rotate(-PI);
    }else{
      image(snake_img, -scl/2-scl2, -scl/2, scl+scl2*2, scl+scl2*2);
    }
    pop();
  }catch(er){console.log(er)}
  };

  this.chDir = function (dir) {
    this.queue.push(dir)
  };
  this.die = function(){
    submitScore();
    s.running = false;
    s.init(width/2, height/2);
    screen = 'menu';
    path.init();
    s.growing += 10;
    s.score=2;
    preview_path.init(s.score);
  }

  this.move = function () {
    if (this.quantified()){
      for (i=0; i<this.body.length; i+=floor(scl/speed)){
        if (!this.invincible && dist(this.x, this.y, this.body[i][0], this.body[i][1]) == 0){
          this.die();
        }
      }
      new_dir = this.queue.shift();
      while ((new_dir=='u' && this.dir=='d')
    || (new_dir=='d' && this.dir=='u')
  ||(new_dir=='r' && this.dir=='l')
||(new_dir=='l' && this.dir=='r')){
        if (this.queue.length>0){
          new_dir = this.queue.shift();
        }else{
          new_dir = this.dir;
          break;
        }
      }
      this.dir = new_dir;
    }
    if (dist(this.x, this.y, a.x, a.y)==0){
      if (a.type != 1 && this.growing==0){
        this.inverse();
      }
      this.score++;
      if (this.score == 30){
        this.speed*=2;
      }
      a.respawn();
      this.growing = floor(scl/this.speed);
    }
    this.body.push([this.x, this.y]);
    if (this.dir === 'u'){
      this.y-=this.speed;
    }
    else if (this.dir === 'd'){
      this.y+=this.speed;
    }
    else if (this.dir === 'r'){
      this.x+=this.speed;
    }
    else{
      this.x-=this.speed;
    }
    if (!this.invincible && this.x<0 || this.x>width-scl || this.y<0 || this.y>height-scl){
      this.die();
    }
    if (this.growing==0){
      this.body.shift()
    }
    else if (this.growing>0){
      this.growing--;
    }
}
}
//Load snake Head
function loadSnakeHead(){
  if (this.dir = 'l'){
    push();
    rotate(PI / 2.0);
    image(snake_img, s.x-5, s.y-5, scl+10, scl+10);
    pop();
  }else if (this.dir = 'r'){
    push();
    rotate(3*PI / 2.0);
    image(snake_img, s.x-5, s.y-5, scl+10, scl+10);
    pop();
  }else if (this.dir = 'u'){
    push();
    rotate(PI );
    image(snake_img, s.x-5, s.y-5, scl+10, scl+10);
    pop();
  }else{
    image(snake_img, s.x-5, s.y-5, scl+10, scl+10);
  }

}
