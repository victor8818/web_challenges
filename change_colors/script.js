const container = document.querySelector("#container");
const colorBtn = document.querySelector("#colorBtn");
const gridForm = document.querySelector("#gridForm");
const gridInput = document.querySelector("#gridCount");

function createGrids(count) {
  container.innerHTML = "";
  for (var i = 0; i < count; i++) {
    const content = document.createElement("div");
    content.classList.add("grid");
    container.appendChild(content);
  }
}

function changeColor() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach(function (grids) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    grids.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
}

colorBtn.addEventListener("click", changeColor);
gridForm.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form reload
  const gridCount = parseInt(gridInput.value, 10);
  if (gridCount > 0 && gridCount <= 100) {
    createGrids(gridCount);
  }
});
