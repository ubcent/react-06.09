import Human from './user';
import Developer from './module.js';

const h = new Human('Vasya', 'Pupkin');

alert(h.sayHi());

const d = new Developer('John', 'Dou');
document.write(d.develop());