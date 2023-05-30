const grid = document.querySelector(".grid");
const coloredBox = document.querySelector(".box");
const slider = document.getElementById("range");
const displayValue = document.getElementById("value");
const clear = document.getElementById("btnClear");

function createGrid(gridSize) {
    for (i = 0; i < gridSize * gridSize; i++) {
        const newBox = document.createElement("div");
        grid.appendChild(newBox);
        newBox.classList.add("box");
        newBox.style.height = `calc(100% / ${gridSize})`;
        newBox.style.width = `calc(100% / ${gridSize})`;
        newBox.addEventListener('mouseover', function () {
            newBox.classList.add("box-black");
        })
    }
}

function clearGrid() {
    while (grid.firstChild) {
        grid.firstChild.remove();
    }
}

displayValue.innerHTML = '1 x 1'

slider.addEventListener('input', function() {
    clearGrid();
    createGrid(slider.value);
    displayValue.innerHTML = `${slider.value} x ${slider.value}`;
})