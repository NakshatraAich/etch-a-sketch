// to only fill color when the mouse is clicked down
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// function to change colour
function changeColour(e) {
    if(e.type === 'mouseover' && mouseDown){
    e.target.style.backgroundColor = "red";
    }
}

// selecting the gridbox
const grid = document.querySelector('.grid');

// formatting the grid
const row_count = 16;
grid.style.gridTemplateColumns = `repeat(${row_count},1fr)`;

// adding the cells
for(let i = 0; i < row_count*row_count;  i++){
    const cells = document.createElement('div');
    cells.classList.add('cells');
    cells.style.backgroundColor = "white";
    grid.appendChild(cells);
    
    // checking for event for each pixel
    cells.addEventListener('mouseover',changeColour);
}



