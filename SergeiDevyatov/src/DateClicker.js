"use strict";

import "./dateClicker.css";

export class DateClicker {
    constructor(divId) {
        this.nestedDiv = document.getElementById(divId);
        this.nestedDiv.innerHTML = '<p>Кликни для появления текущей даты</p>';

        this.nestedDiv.onclick = () => {
            const dateNow = new Date();
            this.nestedDiv.innerHTML = `<p>${dateNow.getFullYear()}-${dateNow.getMonth()}-${dateNow.getDate()}</p>`;
        };


    }

    onClickFunction() {
        const dateNow = new Date();
        this.nestedDiv.innerHTML = `<p>${dateNow.getFullYear()}-${dateNow.getMonth()}-${dateNow.getDate()}</p>`;

    }
}