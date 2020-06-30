'use strict';

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
