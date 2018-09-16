import { Human, GetDate } from './user';

// вывод имени
const hello = new Human('Fufylev', 'Andrey', 'Petrovich');
let name = document.querySelector("#name");
name.innerHTML = hello.sayHi();

// вывод даты
let click = document.querySelector("#click");
let dateContainer = document.querySelector("#date");

const date = new GetDate();

click.onclick = () => dateContainer.innerHTML = date.getDate();
