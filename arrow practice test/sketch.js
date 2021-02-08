// Project Title

// determines the color of the arrow
let theColor =
[[0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]];

let spaces = 
 [[1,2,1,2,3,3],
   [2,1,2,2,1,2],
   [2,4,1,3,2,1],
   [2,1,3,2,2,1],
   [2,3,1,3,2,1],
   [5,3,1,1,4,2]];

// determines the direction the arrow should be facing
let direction = 
 [[2,3,2,2,3,3],
   [3,2,4,3,4,4],
   [1,2,2,4,4,1],
   [3,3,1,4,4,3],
   [2,1,3,4,1,4],
   [2,2,4,1,1,4]];

let rows, cols, cellWidth, cellHeight, arrow;
let p = "white";

let nextMoveX = 0;
let nextMoveY = 0;

let singleArrowRight, singleArrowLeft, singleArrowUp, singleArrowDown;
let doubleArrowRight, doubleArrowLeft, doubleArrowUp, doubleArrowDown;
let tripleArrowRight, tripleArrowLeft, tripleArrowUp, tripleArrowDown;
let quadArrowRight, quadArrowLeft, quadArrowUp, quadArrowDown;
let quintArrowRight, quintArrowLeft, quintArrowUp, quintArrowDown;

let arrows = [[singleArrowRight, doubleArrowDown, singleArrowRight, doubleArrowRight, tripleArrowDown, tripleArrowDown],
[doubleArrowDown, singleArrowRight, doubleArrowLeft, doubleArrowDown, singleArrowLeft, doubleArrowLeft],
[doubleArrowUp, quadArrowRight, singleArrowRight, tripleArrowLeft, doubleArrowLeft, singleArrowUp],
[doubleArrowDown, singleArrowDown, tripleArrowUp, doubleArrowLeft, doubleArrowLeft, singleArrowDown],
[doubleArrowRight, tripleArrowUp, singleArrowDown, tripleArrowLeft, doubleArrowUp, singleArrowLeft],
[quintArrowRight, tripleArrowRight, singleArrowLeft, singleArrowUp, quadArrowUp, doubleArrowLeft]];


let click;

function preload() {
  singleArrowRight = loadImage("assets/1 space arrow right.png");
  singleArrowLeft = loadImage("assets/1 space arrow left.png");
  singleArrowDown = loadImage("assets/1 space arrow down.png");
  singleArrowUp = loadImage("assets/1 space arrow up.png");
  doubleArrowRight = loadImage("assets/2 space arrow right.png");
  doubleArrowLeft = loadImage("assets/2 space arrow left.png");
  doubleArrowDown = loadImage("assets/2 space arrow down.png");
  doubleArrowUp = loadImage("assets/2 space arrow up.png");
  tripleArrowRight = loadImage("assets/3 space arrow right.png");
  tripleArrowLeft = loadImage("assets/3 space arrow left.png");
  tripleArrowDown = loadImage("assets/3 space arrow down.png");
  tripleArrowUp = loadImage("assets/3 space arrow up.png");
  quadArrowRight = loadImage("assets/4 space arrow right.png");
  quadArrowLeft = loadImage("assets/4 space arrow left.png");
  quadArrowDown = loadImage("assets/4 space arrow down.png");
  quadArrowUp = loadImage("assets/4 space arrow up.png");
  quintArrowRight = loadImage("assets/5 space arrow right.png");
  quintArrowLeft = loadImage("assets/5 space arrow left.png");
  quintArrowDown = loadImage("assets/5 space arrow down.png");
  quintArrowUp = loadImage("assets/5 space arrow up.png");
  click = loadSound("assets/Click.wav");
}

function setup() {
  createCanvas(600, 600);
  rows = theColor.length;
  cols = theColor[0].length;
  cellWidth = 100;
  cellHeight = 100;
}

function draw() {
  angleMode(DEGREES);
  background(220);
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      displayColor(x,y);
      arrow = arrows[y][x];
      tint(p);
      image(arrow, x*cellWidth, y*cellHeight, 100, 100);
    }
  }
}

// choose color
function displayColor(x,y){
  if (theColor[y][x] === 0){
    p = "white";
  }
  else if (theColor[y][x] === 1){
    p = "red";
  }
}

function mousePressed() {
  click.play();
  let x = Math.floor(mouseX / cellWidth);
  let y = Math.floor(mouseY / cellHeight);
  if (nextMoveX === 0 && nextMoveY === 0){
    nextMoveX = x;
    nextMoveY = y;
  }
  if (x === nextMoveX && y === nextMoveY){
    if (theColor[y][x] === 0) {
      theColor[y][x] = 1;
    }
    nextStep(x,y);
  }
}

// determines next move
function nextStep(x, y){
  if (direction[y][x] === 1){
    y -= spaces[y][x];
  }
  else if (direction[y][x] === 2){
    x += spaces[y][x];
  }
  else if (direction[y][x] === 3){
    y += spaces[y][x];
  }
  else if (direction[y][x] === 4){
    x -= spaces[y][x];
  }
  console.log(x,y);
  nextMoveX = x;
  nextMoveY = y;
}