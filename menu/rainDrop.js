var rainDrop = function() {
  this.x = floor(random(0, width));
  this.y0 = floor(random(-100, 0));
  this.y = this.y0;
  this.w = 2.5;
  this.h = floor(random(3, 10));
  this.v = map(this.h, 3, 10, 1, 5);
  this.show = function() {
    push();
    noStroke();
    fill(175, 195, 204);
    rect(this.x, this.y, this.w, this.h, 50);
    pop();
  };
  this.move = function() {
    this.y += this.v;
    if (this.y > height) {
      this.y = this.y0
    }
  }
};
