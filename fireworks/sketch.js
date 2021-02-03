let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  for (let i=0; i<fireworks.length; i++){
    if (fireworks[i].isAlive()){
      fireworks[i].move();
      fireworks[i].display();
    }
    else{
      fireworks.splice(i, 1);
    }
  }
}

function mousePressed(){
  let numberOfParticles = 100;
  let theta = 0;
  for (let i = 0; i<numberOfParticles ; i++){ 
    let xSpeed = cos(theta)*2 + random(-0.5,0.5);
    let ySpeed = sin(theta)*2 + random(-0.5, 0.5);
    let someParticle = new particle(mouseX, mouseY, xSpeed,ySpeed, 255, 0,0,255);
    fireworks.push(someParticle);
    theta += 360/numberOfParticles;
 }
}

class particle {
  constructor(x,y,dx,dy,r,g,b,a){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.size = 20;
    this.gravity = 0.03;
  }
  move() {
    this.x += this.dx;
    this.y += this.dy;
    this.a -= 1;
    this.dy += this.gravity;
  }

  display() {
    fill(this.r,this.g, this.b, this.a);
    ellipse(this.x,this.y,this.size, this.size);
  }
  isAlive() {
    return this.a > 0;
  }
}