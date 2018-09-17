export default class Developer {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	showInfo() {
		return `<p>First name: ${this.firstName}</p>
				<p>Last name: ${this.lastName}</p>`;
	}
}