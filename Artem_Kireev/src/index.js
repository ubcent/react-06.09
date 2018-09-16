import { Developer } from './user';

const d = new Developer('Artem', 'Kireev');

alert(d.sayHi());

let button = document.createElement('button');
button.value = 'Нажми на меня';
button.addEventListener('click', function() {
    const date = new Date();
    alert(date);
});
document.body.appendChild(button);