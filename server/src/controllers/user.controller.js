const express = require('express');
const bcrypt = require('bcrypt');
const { UserRepository } = require('../schema');
const { Controller } = require('../core');
const { UserService	} = require('../services');
const { MIN_LENGTH_PASS, REGEX_EMAIL } = require('../constants');
const {
  ServerException,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
  ForbiddenException,
} = require("../exceptions");

class UserController extends Controller {
	_path = '/user';
	_router = express.Router();
	constructor() {
		super();
		this.initializeRoutes();
	}

	async registerAccount (req, res, next) {
    const userRequest = req.body;

    try {
      const userExisting = await UserRepository.findOne({ email: userRequest.email });

      if (userExisting) {
        return next(new BadRequestException('Email already exists under a another user.'));
      }

      const userCreated = await UserService.createUser(userRequest);

      res.status(200).json({
        status: 200,
        message: 'User created successfully',
        id: userCreated._id,
        email: userCreated.email
      });
    } catch (error) {
      return next(new ServerException(error.message));
    }
	};

	async validateBeforeCreateAccount (req, res, next) {
    const userRequest = req.body;

    if (!userRequest) {
      return next(new BadRequestException('User is not provided'));
    }

    const errors = [];

    const { email, password } = req.body;
    if (!email || !password) {
      if (!email) {
        errors.push({
          field: 'email',
          message: 'Email is empty!',
        });
      }

      if (!password) {
        errors.push({
          field: 'password',
          message: 'Password is empty!',
        });
      }
    }

    if (password.length < MIN_LENGTH_PASS) {
      errors.push({
        field: 'password',
        message: 'Password must be greater than or equal to '  + MIN_LENGTH_PASS + ' characters!',
      });
    }

    if (!REGEX_EMAIL.test(email)) {
      errors.push({
        field: 'email',
        message: 'Email invalid!',
      });
    }

    if (errors.length > 0) {
      return next(new NotFoundException('Missing or incorrect information', errors));
    }

    next();
	};

	initializeRoutes() {
		this._router.post(
			`${this._path}/register`,
			this.validateBeforeCreateAccount,
      this.registerAccount
		);
	}
}

module.exports = UserController;