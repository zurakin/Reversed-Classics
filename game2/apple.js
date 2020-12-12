function Apple(){
  this.init = function() {
    this.x = floor(random(w)) * scl;
    this.y = floor(random(h)) * scl;
    this.type = 1;
  }

  this.show = function () {
    if (this.type == 1){
    image(apple_img, this.x-5, this.y-5, scl+10, scl+10);
  }else{
    image(berry_img, this.x-5, this.y-5, scl+10, scl+10);
  }};

  this.respawn = function () {
    this.x = floor(random(w)) * scl;
    this.y = floor(random(h)) * scl;
    this.type = floor(random()*10);
    if (dist(this.x, this.y, s.x, s.y) <scl/2){
      this.respawn();
    }
  }
}
