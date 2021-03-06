'use strict';
// Completes stretch goals 1 2 & 4, alternate implementation of SG 3

/**
 * Start the timer
 */
function startTimer () {
  /**
   * Process the interval
   */
  function timeProcessor() {
    // calculate time passed and update display
    const timePassed = Date.now() - startTime;
    updateTimeDisplay(timePassed);

    // if 10000 milliseconds have gone by, stop timer
    if (timePassed >= 10000) {
      window.clearInterval(interval);
      button.disabled = false;
      button.textContent = "Restart Timer";
    }
  }
  const startTime = Date.now(); // store the time the timer started
  const interval = window.setInterval(timeProcessor, 10);
  updateTimeDisplay(0); // reset to 0
}

// get elements in time display
const displayDigits = [
  'msTens', 'msHundreds', 'secondOnes', 'secondTens'].map(
    x => document.getElementById(x));
const colon = document.getElementById('colon');
const displayElements = displayDigits.concat(
  [colon]);

/**
 * Update the display and set the color
 * @param {number} displayTime value to set display to
 */
function updateTimeDisplay (displayTime) {
  // cannot display times over 10 seconds
  if (displayTime > 10000)
    displayTime = 10000;
  for (let divisor = 10; divisor <= 10000; divisor *= 10) {
    // calculate which element we are setting
    const digit = displayDigits[Math.log10(divisor) - 1];
    // calculate how many of that digits units have gone by
    const digitValue = Math.floor(displayTime / divisor);
    if (digitValue === 0) // use dash for digits we haven't reached
      digit.textContent = "*";
    else // otherwise, extract last digit
      digit.textContent = (digitValue % 10).toString();
  }
  setTimeDisplayColor(displayTime);
}
// initialize display
updateTimeDisplay(0);

/**
 * Set the color of the display
 * @param {number} displayTime value to set display to
 */
function setTimeDisplayColor(displayTime) {
  const color = displayTime < 10000 ? 'black' : 'red';
  for (let element of displayElements)
    element.style.color = color;
}

const button = document.createElement('button');
button.setAttribute('id', 'start-button');
button.textContent = "Start Timer";
button.disabled = false;
button.style.width = "9rem";
button.onclick = function(event) {
  this.disabled = true;
  this.textContent = "Running";
  startTimer();
};

const body = document.getElementsByTagName('body')[0];
body.style.flexDirection = "column";
body.appendChild(button);

document.querySelector("body > div").style.fontFamily = 'monospace';

//  LocalWords:  msTens msHundreds secondOnes secondTens LocalWords
//  LocalWords:  SG monospace
