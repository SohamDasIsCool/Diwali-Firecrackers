particles = [];
a=0;
img="";
function setup() {
  canvas=createCanvas(600, 400);
  img=loadImage("pot.jpg");
}
function draw() {
  background(255);
  image(img,150,303,90,90);
  for (let i = 0; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 50);
    }
  }
}

class Particle {
  constructor() {
    this.x = 197;
    this.y = 304;
    this.vx = random(random(-2,0),random(0,2));
    this.vy = random(-5,-0.5);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 2;
  }

  show() {
    a=Math.floor(Math.random()*5);
    if(a==0){
      noStroke();
      fill(226, 88, 34, this.alpha);
      ellipse(this.x, this.y, 10);
    }
    if(a==1){
    noStroke();
    fill(207, 78, 27, this.alpha);
    ellipse(this.x, this.y, 6);
    }
    if(a==2){
    noStroke();
    fill(186,68,20, this.alpha);
    ellipse(this.x, this.y, 8);
    }
    else{
      noStroke();
      fill(225,150,7, this.alpha);
      ellipse(this.x, this.y, 4);
    }
  }
}