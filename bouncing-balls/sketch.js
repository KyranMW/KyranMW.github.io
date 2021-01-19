// bouncing balls array demo

let bouncing = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  moveBall();
  displayBall();
}

function mousePressed(){
  let ball = {
    x: mouseX,
    y: mouseY,
    size: random(25,100),
    dx: random(-5,5),
    dy: random(-5,5),
    theColor: color(random(0,255),random(0,255),random(0,255))
  };
  bouncing.push(ball);
}

function moveBall(){
  for (let ball of bouncing){
    ball.x += ball.dx;
    ball.y += ball.dy;
    if (ball.x + ball.size/2 >= width || ball.x - ball.size/2 <=0){
      ball.dx *= -1;
    }
    if (ball.y + ball.size/2 >= height || ball.y - ball.size/2 <=0){
      ball.dy *= -1;
    }
  }
}

function displayBall(){
  for (let ball of bouncing){
    fill(ball.theColor);
    circle(ball.x, ball.y, ball.size);
  }
}