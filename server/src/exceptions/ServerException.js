const HttpException = require('./HttpException');

class ServerException extends HttpException {
	constructor(message, errors) {
		super(message || 'Internal Server Error', 500, errors);
	}
}

module.exports = ServerException;