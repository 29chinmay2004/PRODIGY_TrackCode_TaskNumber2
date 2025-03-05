let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerInterval;
let isRunning = false;

const timerDisplay = document.getElementById("timerDisplay");
const lapTimesList = document.getElementById("lapTimes");
const themeToggleCheckbox = document.getElementById("themeToggle");

function updateDisplay() {
  timerDisplay.textContent = `[${String(minutes).padStart(2, "0")}]:[${String(seconds).padStart(2, "0")}]:[${String(milliseconds).padStart(2, "0")}]`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(() => {
      milliseconds++;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      updateDisplay();
    }, 10);
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
  lapTimesList.innerHTML = "";
}

function recordLap() {
  if (isRunning) {
    const lapTime = `[${String(minutes).padStart(2, "0")}]:[${String(seconds).padStart(2, "0")}]:[${String(milliseconds).padStart(2, "0")}]`;
    const lapItem = document.createElement("li");
    lapItem.textContent = lapTime;
    lapTimesList.appendChild(lapItem);
  }
}

// Theme toggle functionality
themeToggleCheckbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

// Attach event listeners to buttons
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);

// Initialize display
updateDisplay();
