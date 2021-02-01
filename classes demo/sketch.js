// Classes demo, OOP walker

let theWalkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  for (let i=0; i<theWalkers.length; i++){
    theWalkers[i].move();
    theWalkers[i].display();
  }
}

function mousePressed(){
  let someWalker = new Walker(mouseX, mouseY, "yellow");
  theWalkers.push(someWalker);
}

class Walker {
  constructor(x,y,theColor) {
    this.x = x;
    this.y = y;
    this.color = theColor;
    this.speed = 5;
  }
  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, 3, 3);
  }
  move() {
    let choice = random(100);
    if (choice < 25) {
      this.x += this.speed;
    }
    else if (choice < 50) {
      this.x -= this .speed;
    }
    else if (choice < 75) {
      this.y += this .speed;
    }
    else if (choice < 100) {
      this.y -= this .speed;
    }
  }
}