export default class Clock {
    constructor(name,data){
        this.name = name;
        this.data = data;
    }
    time(){
        let date;
        if (this.data === 'число'){
            date = new Date();
            return `Hi, ${this.name} сегодня ${date.getDate()}-${date.getMonth() + 1} `;
        }else if(this.data === 'час'){
            date = new Date();
            let hour = date.getHours();
            return `Hi, ${this.name} сейчас ${hour} час(ов)`;
        }else{
            return 'Введите словом: час, либо число';
        }

    }
}