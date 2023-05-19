const grid = document.querySelector(".grid");

function createGrid(gridSize) {
    for (i = 0; i < gridSize * gridSize; i++) {
        const newBox = document.createElement("div");
        newBox.classList.add("box");
        grid.appendChild(newBox);
        newBox.style.height = `calc(100% / ${gridSize})`;
        newBox.style.width = `calc(100% / ${gridSize})`;
    }
}

createGrid(10);
