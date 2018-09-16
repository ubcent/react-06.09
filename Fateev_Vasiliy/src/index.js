// import {Human, Alien} from "./user";
import Human from "./user";
import DateNow from "./date";

const h = new Human('Vasiliy', 'Fateev');

$('body').append('<div class="say_hi">Say hi</div>');

$(document).on('click', '.say_hi', () => {
  alert(h.sayHi() + '\n' + DateNow.getDate());
});
