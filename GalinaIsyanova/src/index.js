import './footer.css';
import {Delevoper} from './developer';

const myDeveloper = new Delevoper('Galina', 'Isyanova');
$('#footer_document').html(myDeveloper.getInfo());
$('footer').on('click', () => {
    const currentDate = new Date();
    alert(`Текущая дата: ${currentDate.getDate()}-${currentDate.getMonth()+1}-${currentDate.getFullYear()}`);
});