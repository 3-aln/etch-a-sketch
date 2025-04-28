const container = document.querySelector(".container");

// Create a grid of squares in the container
for (let i = 0; i < 16; i++) {
  // Each a flex container is a row of squares
  const gridRow = document.createElement("div");
  gridRow.classList.add("grid-row");
  container.appendChild(gridRow);

  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridRow.appendChild(square);
  }
}

// Add a mouseenter event listener to each square element in the grid
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseenter", () => {
    // Paint the square black
    square.classList.add("paint-black");
  });
});
