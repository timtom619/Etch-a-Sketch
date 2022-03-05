//Make container 512px
const container = document.querySelector('.container');


//Creating individual square div 32px
const squareDiv = document.createElement('div');
squareDiv.style.width = '32px';
squareDiv.style.height = '32px';
squareDiv.style.border = '2px solid red';

// append squareDiv as child to .container
container.appendChild(squareDiv);