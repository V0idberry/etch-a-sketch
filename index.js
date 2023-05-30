const grid = document.querySelector(".grid");
const rainbow = document.querySelector(".bowBtn");
const slider = document.getElementById("range");
const displayValue = document.getElementById("value");
const resetBtn = document.getElementById("clearBtn");

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

function reset() {
    let boxes = document.querySelectorAll("div.box");

    boxes.forEach(function(box) {
        box.classList.remove("box-black");
    })
}

rainbow.addEventListener('click', function(e) {
    rainbow.classList.toggle("rainbow");

    console.log(e);
});

resetBtn.addEventListener('click', function() {
    reset();
});

displayValue.innerHTML = 'Select Grid Size'

slider.addEventListener('input', function() {
    clearGrid();
    createGrid(slider.value);
    displayValue.innerHTML = `${slider.value} x ${slider.value}`;
})