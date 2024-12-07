const BadRequestException = require('./BadRequestException');
const NotFoundException = require('./NotFoundException');
const UnauthorizedException = require('./UnauthorizedException');
const ServerException = require('./ServerException');
const ForbiddenException = require('./ForbiddenException');

module.exports = {
	BadRequestException,
	NotFoundException,
	UnauthorizedException,
	ServerException,
	ForbiddenException
};
