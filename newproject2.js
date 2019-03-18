let hackerPic;
particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  hackerPic = loadImage('assets/snowflake.png');
}

function draw() {
  background(random(30));
  for (let i = 0; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}

class Particle {

  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.vx = random(-10, 10);
    this.vy = random(-5, 5);
    this.alpha = 1000;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 1;
  }

  display(){
    image(hackerPic, this.x, this.y, this.vx, this.vy);
  }

}
