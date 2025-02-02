const HttpException = require('./HttpException');

class BadRequestException extends HttpException {
	constructor(message, errors) {
		super(message || 'Bad Request', 400, errors);
	}
}

module.exports = BadRequestException;