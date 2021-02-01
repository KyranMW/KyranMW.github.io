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

let rows, cols, cellWidth, cellHeight, arrow;

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
  background(220);
  displaySpaces();
  //displayDirection();
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
      image(arrow, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

// function chooseArrow(){
//   for (let y = 0; y < rows; y++){
//     for (let x = 0; x < cols; x++){
//       if (spaces[y][x] === 1){
//         return singleArrow;
//       }
//       else if (spaces[y][x] === 2){
//         return doubleArrow;
//       }
//       else if (spaces[y][x] === 3){
//         return tripleArrow;
//       }
//       else if (spaces[y][x] === 4){
//         return quadArrow;
//       }
//       else if (spaces[y][x] === 5){
//         return quintArrow;
//       }
//     }
//   }
// }

// function displayDirection(){
//   for (let i = 0; i < rows; i++){
//     for (let j = 0; j < cols; j++){
//       if (directon[i][j] === 1){

//       }
//       if (directon[i][j] === 2){
        
//       }
//       if (directon[i][j] === 3){
        
//       }
//       if (directon[i][j] === 4){
        
//       }
//     }
//   }
// }