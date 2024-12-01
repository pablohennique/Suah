/**
 * @Service
 * If subclass initial constructor, you must be using super();
 *
 * */
class Service {
	constructor() {
		console.log(
			`Instance Service ${this.constructor.name} has loaded!`
		);
	}
}

module.exports = Service;