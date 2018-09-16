"use strict";

export default class Developer {
	constructor(fName, mName, lName) {
		this.fName = fName;
		this.mName = mName;
		this.lName = lName;
	}

	getFullName() {
		return `${this.fName} ${this.mName} ${this.lName}`;
	}
}