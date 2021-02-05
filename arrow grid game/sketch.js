// arrow grid game
// Kyran Mcknight-Woods
// CompSci 30
// 2D Grid project
// inspiration from Lock Puzzle

// determines how many spaces between the clicked arrow and the next arrow
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

// determines the color of the arrow
let theColor =
[[0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]];

let rows, cols, cellWidth, cellHeight, arrow, p;

let nextMoveX = 0;
let nextMoveY = 0;

let singleArrow;
let doubleArrow;
let tripleArrow;
let quadArrow;
let quintArrow;

let click;

function preload() {
  singleArrow = loadImage("assets/1 space arrow.png");
  doubleArrow = loadImage("assets/2 space arrow.png");
  tripleArrow = loadImage("assets/3 space arrow.png");
  quadArrow = loadImage("assets/4 space arrow.png");
  quintArrow = loadImage("assets/5 space arrow.png");
  click = loadSound("assets/Click.wav");
}

function setup() {
  createCanvas(600, 600);
  rows = spaces.length;
  cols = spaces[0].length;
  cellWidth = width/cols;
  cellHeight = height/rows;
}

function draw() {
  angleMode(DEGREES);
  background(220);
  displaySpaces();
}

function displaySpaces(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      if (spaces[y][x] === 1){ // arrow with 1 line(1 space)
        arrow = singleArrow;
      }
      else if (spaces[y][x] === 2){ // arrow with 2 lines(2 spaces)
        arrow = doubleArrow;
      }
      else if (spaces[y][x] === 3){ // arrow with 3 lines(3 spaces)
        arrow = tripleArrow;
      }
      else if (spaces[y][x] === 4){// arrow with 4 lines(4 spaces)
        arrow = quadArrow;
      }
      else if (spaces[y][x] === 5){// arrow with 5 lines(5 spaces)
        arrow = quintArrow;
      }
      displayColor(x,y);
      push();
      translate(x*cellWidth + 50, y*cellHeight + 50);
      rotate(direction[y][x] * 90 + 180);
      tint(p);
      image(arrow, -50, -50, cellWidth, cellHeight);
      pop();
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