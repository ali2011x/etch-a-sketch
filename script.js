btn = document.querySelector('.btn');
container = document.querySelector('.container');
let gridSize = 16;

function createGrid(gridSize) {
    container.innerHTML = "";
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = (960/gridSize) + 'px';
        div.style.height = (960/gridSize) + 'px';
        container.appendChild(div)
        
    }
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor();
        })
    })
}
btn.addEventListener('click', () => {
    gridSize = parseInt(prompt('Choose a number between 16 and 100', '16'))
    if (gridSize > 100 || gridSize < 16) {
        alert('Choose a valid number');
        return;
    }
    createGrid(gridSize);
})

let randomColor = function() {
    return `rgb(${Math.floor(Math.random() * 256)},
     ${Math.floor(Math.random() * 256 )},
     ${Math.floor(Math.random() * 256)})`;
}

createGrid(gridSize);

