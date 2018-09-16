export class UserController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    getUserName() {
        const buttonName = document.querySelector('#name');
        buttonName.addEventListener('click',() =>{
            this.renderUserName();
        } );

    }
    renderUserName(){
        this.view.isShowName = true;
        this.view.render();
        this.getUserName();
        this.getTime();
    }

    getTime(){
        const buttonTime = document.querySelector('#time');
        buttonTime.addEventListener('click', () => {
            this.renderTime();
        });
    }
    renderTime(){
        this.view.isShowTime = true;
        this.view.render();
        this.getUserName();
        this.getTime();
    }
}