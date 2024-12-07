class HttpException extends Error {
	constructor(message, status, errors) {
		super(message);
		this.status = status;
		this.errors = errors;
	}
}

module.exports = HttpException;