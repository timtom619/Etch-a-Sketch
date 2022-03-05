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



