'use strict';

function startTimer () {
  function timeProcessor() {
    // calculate time passed and update display
    const timePassed = Date.now() - startTime;
    updateTimeDisplay(timePassed);

    // if 10000 milliseconds have gone by, stop timer
    if (timePassed >= 10000) {
      window.clearInterval(interval);
      button.disabled = false;
      button.textContent = "Restart Timer";
      updateTimeDisplay(0); // reset display
    }
  }
  const startTime = Date.now(); // store the time the timer started
  const interval = window.setInterval(timeProcessor, 10);
}
const button = document.createElement('button');
button.setAttribute('id', 'start-button');
button.textContent = "Start Timer";
button.disabled = false;
button.style.width = "7rem";
button.onclick = function(event) {
  this.disabled = true;
  this.textContent = "Running";
  startTimer();
};

const body = document.getElementsByTagName('body')[0];
body.style.flexDirection = "column";
body.appendChild(button);
