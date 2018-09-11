import {Human} from './user';
import Clock from './time';

// const h = new Human('Илья','Курбаков');
const m = new Clock('Илья','число');

// alert(h.sayHi());
// alert(m.time());
var button = document.getElementById('clock');
button.onclick =function () {
    document.getElementById('time').textContent = m.time();
};