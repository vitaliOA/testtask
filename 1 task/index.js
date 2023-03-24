const hours = document.getElementById("hours");
const mins = document.getElementById("min");
const secs = document.getElementById("sec");
const start = document.getElementById("start");
const timeValue = document.getElementById("input");

let countdown = 0;
let startTime = 0;
let timerFunc = null;

start.onclick = function (event) {
  event.preventDefault();
  countdown = parseInt(timeValue.value);
  if (countdown > 0) {
    startTime = Math.ceil(Date.now() / 1000);
    timerFunc = setInterval(updateDisplay, 1000);
  }
};

function stopTimer() {
  clearInterval(timerFunc);
  timerFunc = null;
}

function updateDisplay() {
  const currentTime = Math.ceil(Date.now() / 1000);
  const remainingTime = countdown - currentTime + startTime;
  const timeValues = getTimeValues(remainingTime);

  hours.innerHTML = ("00" + timeValues.hours).slice(-2);
  mins.innerHTML = ("00" + timeValues.mins).slice(-2);
  secs.innerHTML = ("00" + timeValues.secs).slice(-2);

  if (remainingTime <= 0) {
    alert("time up");
    stopTimer();
  }
}

function getTimeValues(referenceTime) {
  const hours = parseInt(referenceTime / 3600);
  const mins = parseInt((referenceTime - hours * 3600) / 60);
  const secs = referenceTime - hours * 3600 - mins * 60;

  return { hours, mins, secs };
}
