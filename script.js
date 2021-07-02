let container = document.querySelector('#container');
createGrid(16);
let button = document.querySelector('#resize');
button.addEventListener('click',resizeGrids);

function resizeGrids(){
    let size1 = getValidSizeInput();
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    createGrid(size1);
    container.style.gridTemplateColumns = 'repeat('+size1+', auto)';
    container.style.gridTemplateRows = 'repeat('+size1+', auto)';
}

function getValidSizeInput(){
    let ifValid = false;
    let size;
    while (!ifValid){
        let input = prompt("Please enter the size of the grid you'd like! 1-100 Please");
        if (input === null){
            break;
        }
        size = parseInt(input);        
        if  (size && size <=100 && size>0){
            ifValid = true;
            console.log(size);
        }
        else {
            ifValid = false;
        }
    }
    return size;
}

function createGrid(gridSize){
    for(let i=0; i <gridSize; i++){
        for(let j=0; j<gridSize; j++){
            let grid = document.createElement('div');
            grid.addEventListener('mouseover', function(){
                this.classList.add('hover-grid');
            });
            grid.classList.add('grid');
            container.appendChild(grid);
        }
    }
}