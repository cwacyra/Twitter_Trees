void setup() {
  size(950, 950);
  smooth();
  noLoop();
}
 
void draw() {
  background(255);
  strokeWeight(random(12,20));
  translate(width/2, height-20);
  tree(0);
  save("output.png");
  exit();
}
 
void tree(int branch) {
  if (branch < 14) {               
    stroke(95, 75, 65);
    line(0, 0, 0, -height/10);
    translate(0, -height/10);
    rotate(random(-0.1, 0.1));
    if (random(1.0) < 0.6) {         
      rotate(0.3);
      scale(0.75);
      pushMatrix();
      tree(branch + 1);
      popMatrix();
      rotate(-0.7);
      pushMatrix();
      tree(branch + 1);
      popMatrix();
    } else if (branch > 9) {
      stroke(random(0,255), random(0,255),random(0, 255));
      line(0, 0, 0, -height/10);
      translate(0, -height/10);
      rotate(random(-0.1, 0.1));
      if (random(1.0) < 0.1) {         
        rotate(0.3);
        scale(0.75);
        pushMatrix();
        tree(branch + 1);
        popMatrix();
        rotate(-0.7);
        pushMatrix();
        tree(branch + 2);
        popMatrix();
      }
    } else {
      tree(branch);
    }
  }

}
 