const grid = document.querySelector(".grid");
const slider = document.getElementById("range");
const displayValue = document.getElementById("value");

displayValue.innerHTML = 'Please select the desired grid size.'

slider.addEventListener('input', function() {
    clearGrid();
    createGrid(slider.value);
    displayValue.innerHTML = `Current grid size: ${slider.value} x ${slider.value}`;
})

function createGrid(gridSize) {
    for (i = 0; i < gridSize * gridSize; i++) {
        const newBox = document.createElement("div");
        grid.appendChild(newBox);
        newBox.classList.add("box");
        newBox.style.height = `calc(100% / ${gridSize})`;
        newBox.style.width = `calc(100% / ${gridSize})`;
    }
}

function clearGrid() {
    while (grid.firstChild) {
        grid.firstChild.remove();
    }
}