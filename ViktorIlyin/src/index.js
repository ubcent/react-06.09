"use strict";

import Developer from './developer';
import date from './date';

let dev = new Developer("Vasya", "Sigizmundovish", "Pupkin");
alert(dev.getFullName());

let dateBtn = document.getElementById("btn01");

dateBtn.onclick = function() {
	alert(date);
};