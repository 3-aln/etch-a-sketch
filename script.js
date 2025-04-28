const container = document.querySelector(".container");

setGridSize(16);
addPaintListeners();

// Add a click event listener to the button that changes grid size
const gridSizeButton = document.querySelector(".grid-size-button");
gridSizeButton.addEventListener("click", () => {
  clearGrid();
  
  // Get new grid size from user, between 1 and 100
  newSize = prompt("New canvas size (between 1 and 100):", 16);
  
  if (1 <= newSize && newSize <= 100) setGridSize(newSize);
});

function setGridSize(size) {
  const rows = document.querySelectorAll(".grid-row");
  rows.forEach((row) => {
    container.removeChild(row);
  });

  for (let i = 0; i < size; i++) {
    // Each a flex container is a row of squares
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row")
    container.appendChild(gridRow);
  
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      gridRow.appendChild(square);
    }
  }

  addPaintListeners();
}

// Add a mouseenter event listener to each square element in the grid
function addPaintListeners() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      // Paint the square black
      square.classList.add("paint-black");
    });
  }); 
}

function clearGrid() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.classList.remove("paint-black");
  });
}
