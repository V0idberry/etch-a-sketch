const grid = document.querySelector(".grid");
const rainbow = document.querySelector(".bowBtn");
const slider = document.getElementById("range");
const displayValue = document.getElementById("value");
const resetBtn = document.getElementById("clearBtn");

const colors = ["#fbf8cc", "#fde4cf", "#ffcfd2", "#f1c0e8", "#cfbaf0", "#a3c4f3", "#90dbf4", "#8eecf5", "#98f5e1", "#b9fbc0"];
let rainbowMode = false;

function createGrid(gridSize) {
    for (i = 0; i < gridSize * gridSize; i++) {
        const newBox = document.createElement("div");
        grid.appendChild(newBox);
        newBox.classList.add("box");
        newBox.style.height = `calc(100% / ${gridSize})`;
        newBox.style.width = `calc(100% / ${gridSize})`;
        newBox.addEventListener('mouseover', function () {
            if (rainbowMode == false) {
                newBox.style.backgroundColor = "black";
            } else {
                newBox.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            }
        })
    }
}

function clearGrid() {
    while (grid.firstChild) {
        grid.firstChild.remove();
    }
}

function reset() {
    let boxes = document.querySelectorAll("div.box");

    boxes.forEach(function(box) {
        box.style.backgroundColor = null;
    })
}

rainbow.addEventListener('click', function() {
    rainbow.classList.toggle("rainbow");

    if (rainbowMode == true) {
        rainbowMode = false;
    } else {
        rainbowMode = true;
    }
});

resetBtn.addEventListener('click', function() {
    reset();
});

displayValue.innerHTML = 'Grid Size'

slider.addEventListener('input', function() {
    clearGrid();
    createGrid(slider.value);
    displayValue.innerHTML = `${slider.value} x ${slider.value}`;
})