import Developer from './developer';

const dev = new Developer('Jen', 'Koshits');

let info = dev.showInfo();
let div = document.createElement('div');
let date = new Date();

div.innerHTML = info;
document.body.appendChild(div);

div.onclick = (event) => event.target = alert(date);


