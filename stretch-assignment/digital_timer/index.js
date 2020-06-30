'use strict';
skewer(); // connect to emacs REPL

const button = document.createElement('button');
button.setAttribute('id', 'start-button');
button.textContent = "Start Timer";
button.disabled = false;
button.style.width = "7rem";

const body = document.getElementsByTagName('body')[0];
body.style.flexDirection = "column";
body.appendChild(button);
