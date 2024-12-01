/**
 * @Controller
 * If subclass initial constructor, you must be using super();
 *
 * */
class Controller {
  constructor() {
    console.log(
      `Instance Controller ${this.constructor.name} has loaded!`
    );
  }
}

module.exports = Controller;
