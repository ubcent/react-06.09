"use strict";

import './fio.css';

export class FioBlock {
    constructor(divId) {
        this.nestedDiv = document.getElementById(divId);

    }

    setFio(firstName, lastName, rank) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rank = rank;
    }

    renderFio() {
        this.nestedDiv.innerHTML = `<p>${this.rank} ${this.firstName} ${this.lastName}</p>`;
    }
}