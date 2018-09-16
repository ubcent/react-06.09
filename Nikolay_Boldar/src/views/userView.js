export class UserView {
    constructor(model,elementId){
        this.model=model;
        this.elementId=elementId;
        this.isShowName=false;
        this.isShowTime=false;
    }
    render(){
        const mainElement=document.querySelector(`#${this.elementId}`);
        let name;
        let currentTime;

        if (this.isShowTime===true){
            currentTime=new Date();
        }
        if (this.isShowName===true){
            name=`${this.model.firstName} ${this.model.lastName}`;
        }

        mainElement.innerHTML=`<h1>Developer</h1>
                                <p >${name}</p>
                                <p >current time: ${currentTime}</p>
                                <button id="name" type="button">show name</button>
                                <button id="time" type="button">show time</button>`;
    }
}