//Make container 512px
const container = document.querySelector('.container');

//Create 256 square divs
//Append squareDivs as child to .container

for(let i = 0; i < 256; i++) {
  let squareDiv = document.createElement('div');
  squareDiv.className = 'squareDiv';
  container.appendChild(squareDiv);

  // Give each div element a mouseover event w/grey background change
  squareDiv.addEventListener('mouseover', () => {
    squareDiv.style.backgroundColor = 'grey';
 });
}

// Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid. Once entered, the new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.

// Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
// Also check out prompts.
// You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

let newGridDimensions = 0;

// Add a button to the top of the screen which will clear the current grid
const reset = document.querySelector('.reset').addEventListener('click', () => {
  let collection = container.children;
  for(let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = 'white';
  }

  //Send popup asking for the number of squares per side for new grid
  newGridDimensions = +prompt('Select a new grid size:');
});