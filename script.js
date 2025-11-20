(function logWidth() {
  function report() {
    console.log("viewport width (window.innerWidth):", window.innerWidth);
    console.log("screen width (screen.width):", window.screen.width);
  }

  // initial report
  report();

  // report on resize
  window.addEventListener("resize", report);
})();

const targetDate = new Date(2025, 11, 8, 10, 0, 0).getTime();

const daysDisplay = document.getElementById("days");
const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const countdownContainer = document.getElementById("countdown-container");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function updateTimer() {
  const now = new Date().getTime();

  const distance = targetDate - now;

  if (distance < 0) {
    clearInterval(timerInterval);
    countdownContainer.innerHTML = "<h1>⏰ Час вийшов! ⏰</h1>"; // Змінюємо вміст на повідомлення
    return;
  }

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);

  daysDisplay.textContent = String(days).padStart(2, "0");
  hoursDisplay.textContent = String(hours).padStart(2, "0");
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

updateTimer();

const timerInterval = setInterval(updateTimer, 1000);
