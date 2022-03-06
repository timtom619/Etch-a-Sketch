const container = document.querySelector('.container');
let list;

// set grid size based on userInput newGridDimensions * newGridDimensions
// squares should change size dynamically 500/ userInput
function createGrid(gridSize) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for(let i = 0; i < (gridSize * gridSize); i++) {  
    let squareDiv = document.createElement('div');
    squareDiv.className = 'squareDiv';
    container.appendChild(squareDiv);
    squareDiv.style.width = 500 / gridSize;
    squareDiv.style.height = 500 / gridSize;
   
    // Give each div element a mouseover event w/grey background change
    squareDiv.addEventListener('mouseover', () => {
      squareDiv.style.backgroundColor = 'grey';
   });
  }
  // creating a nodelist and storing in list to be used in setNewGridSize() 
  list = document.querySelectorAll('.squareDiv');
}

//Default Start 16x16 grid
createGrid(16);

let newGridDimensions = 0;

// Add a button to the top of the screen which will clear the current grid
const reset = document.querySelector('.reset').addEventListener('click', () => {
  let collection = container.children;

  for(let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = 'white';
  }

  //Send popup asking for the number of squares per side for new grid
  newGridDimensions = +prompt('Select a new grid size:');
  while(newGridDimensions > 100) {
    newGridDimensions = +prompt('Please select a grid size lower than 100.');
  }
  
  setNewGridSize();

});
//Define a function that sets new grid size bases on newGridDimensions
function setNewGridSize() {
  //removes all child divs from parent .container
  for (let i of list) {
    i.remove();
  }
  
  //Create new grid based on user input.
  createGrid(newGridDimensions);
}

