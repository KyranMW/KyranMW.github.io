//arrow grid game

let spaces = 
 [[1,2,1,2,3,3],
   [2,1,2,2,1,2],
   [2,4,1,3,2,1],
   [2,1,3,2,2,1],
   [2,3,1,3,2,1],
   [5,3,1,1,4,2]];

let direction = 
 [[2,3,2,2,3,3],
   [3,2,4,3,4,4],
   [1,2,2,4,4,1],
   [3,3,1,4,4,3],
   [2,1,3,4,1,4],
   [2,2,4,1,1,4]];

let theColor =
[[0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]];

let rows, cols, cellWidth, cellHeight, arrow, p, nextSpace, nextDirection;

let singleArrow;
let doubleArrow;
let tripleArrow;
let quadArrow;
let quintArrow;

function preload() {
  singleArrow = loadImage("assets/1 space arrow.png");
  doubleArrow = loadImage("assets/2 space arrow.png");
  tripleArrow = loadImage("assets/3 space arrow.png");
  quadArrow = loadImage("assets/4 space arrow.png");
  quintArrow = loadImage("assets/5 space arrow.png");
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
      if (spaces[y][x] === 1){
        arrow = singleArrow;
      }
      else if (spaces[y][x] === 2){
        arrow = doubleArrow;
      }
      else if (spaces[y][x] === 3){
        arrow = tripleArrow;
      }
      else if (spaces[y][x] === 4){
        arrow = quadArrow;
      }
      else if (spaces[y][x] === 5){
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

function mousePressed() {
  let x = Math.floor(mouseX / cellWidth);
  let y = Math.floor(mouseY / cellHeight);
  if (theColor[y][x] === 1) {
    theColor[y][x] = 0;
  }
  else if (theColor[y][x] === 0) {
    theColor[y][x] = 1;
  }
}

function displayColor(x,y){
  if (theColor[y][x] === 0){
    p = "white";
  }
  else if (theColor[y][x] === 1){
    p = "red";
  }
}

function nextStep(x, y){
  nextSpace = spaces[y][x];
  nextDirection = direction[y][x];
}