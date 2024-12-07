const HttpException = require('./HttpException');

class NotFoundException extends HttpException {
	constructor(message, errors) {
		super(message || 'Not Found', 404, errors);
	}
}

module.exports = NotFoundException;