// Array of 50 random colors
const colors = [
  "#FF5733", "#33FF57", "#5733FF", "#FF33A1", "#33FFA5", "#FFA533",
  "#3365FF", "#FF33D4", "#33FFD6", "#FF6A33", "#33FFDA", "#DA33FF",
  "#33FF6A", "#FF33B2", "#A533FF", "#FFD133", "#FF3333", "#A5FF33",
  "#33C3FF", "#FF3365", "#33FF9E", "#FFBA33", "#33FFD1", "#FF33AF",
  "#33FFA0", "#FF33B9", "#33FFD3", "#B933FF", "#33FFA8", "#FF33E6",
  "#FFA833", "#3391FF", "#FF33F4", "#33FFAB", "#FF5C33", "#33FFAF",
  "#FFDA33", "#33FFFC", "#FF3357", "#33FFB5", "#FF333B", "#33FFF9",
  "#FF3375", "#33FFF0", "#FFAD33", "#33FFFD", "#FF33D0", "#33FFF5",
  "#FF3350", "#33FFEE"
];

// Function to change color
function changeColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Event listeners for spacebar press and mouse click
document.addEventListener('click', changeColor);
document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    changeColor();
  }
});
