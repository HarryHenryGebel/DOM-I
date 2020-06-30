'use strict';
skewer(); // connect to emacs REPL

const button = document.createElement('button');
button.setAttribute('id', 'start-button');
button.textContent = "Start Timer";
button.disabled = false;

const body = document.getElementsByTagName('body')[0];
body.appendChild(button);
