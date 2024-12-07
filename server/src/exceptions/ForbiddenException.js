const HttpException = require('./HttpException');

class ForbiddenException extends HttpException {
	constructor(message, errors) {
		super(message || 'Forbidden', 403, errors);
	}
}

module.exports = ForbiddenException;