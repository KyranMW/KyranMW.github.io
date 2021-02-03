// grid neighbors

let grid = createEmptyGrid(10,10);
let rows, cols, cellWidth, cellHeight;
let music;

function preload(){
  music = loadSound("assets/background music.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  music.loop();
  rows = grid.length;
  cols = grid[0].length;
  cellWidth = width/cols;
  cellHeight = height/rows;
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed(){
  let x = Math.floor(mouseX / cellWidth);
  let y = Math.floor(mouseY / cellHeight);
  toggleCell(x,y); //self
  toggleCell(x,y-1); //north
  toggleCell(x,y+1); //south
  toggleCell(x+1,y); //east
  toggleCell(x-1,y); //west
}

function toggleCell(x,y){
  //check that the coordinates are in the array
  if(x >= 0 && x < cols && y >= 0 && y < rows){
    if (grid[y][x] === 1){
      grid[y][x] = 0;
    }
    else if (grid[y][x] === 0){
      grid[y][x] = 1;
    }
  }
}

function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      if (grid[y][x] === 0){
        fill("blue");
      }
      if (grid[y][x] === 1){
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createEmptyGrid(cols,rows){
  let emptyGrid = [];
  for (let y=0; y<rows; y++) {
    emptyGrid.push([]);
    for (let x=0; x<cols; x++) {
      emptyGrid[y].push(0);
    }
  }
  return emptyGrid;
}