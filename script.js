// Settings
const minNum = 1;
const maxNum = 12;
const ops = ["+", "-", "*"];
const showSeconds = 6; // how long each problem shows

// DOM
const problemEl = document.getElementById("problem");

// helpers
function randomOp() {
  return ops[Math.floor(Math.random() * ops.length)];
}
function randomNum() {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

function fadeOut() {
  problemEl.style.opacity = "0";
}

function fadeIn(text) {
  problemEl.textContent = text;
  setTimeout(() => {
    problemEl.style.opacity = "1";
  }, 50);
}

function nextProblem() {
  const a = randomNum();
  const b = randomNum();
  const op = randomOp();
  const expr = `${a} ${op} ${b}`;
  const answer = eval(expr).toString();

  // show problem
  fadeIn(expr);

  // fade out, then next problem
  setTimeout(() => {
    fadeOut();
    setTimeout(nextProblem, 1200); // after fade
  }, showSeconds * 1000);
}

// start on load
window.addEventListener("load", () => {
  nextProblem();
});
