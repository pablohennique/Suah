const express = require('express');
const bcrypt = require('bcrypt');
const { UserRepository } = require('../schema');
const { Controller } = require('../core');
const { UserService	} = require('../services');
const asyncHandler = require('express-async-handler');

class UserController extends Controller {
	_path = '/user';
	_router = express.Router();
	constructor() {
		super();
		this.initializeRoutes();
	}

	registerAccount = asyncHandler(async (req, res) => {
    const userRequest = req.body;
		const userExisting = await UserRepository.findOne({ email: userRequest.email });

		if (userExisting) {
      const error = new Error('Error encountered while craeting user.');
      error.status = 400;
      error.errors = 'Email already exists under a another user.';
      throw error;
		}

		const userCreated = await UserService.createUser(userRequest);

    if (!userCreated) {
      const error = new Error('Error encountered while craeting user.');
      error.status = 400;
      error.errors = 'Unknown errored encountered when attempting to save user in database.';
      throw error;
    }

    res.json({
      status: 200,
      message: 'User created successfully',
      id: userCreated._id,
      email: userCreated.email
    });
	});

	validateBeforeCreateAccount = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      const errors = [];
      if (!email) {
        errors.push({
          field: "email",
          message: "Email is not empty!",
        });
      }

      if (!password) {
        errors.push({
          field: "password",
          message: "Password is not empty!",
        });
      }

      if (password.length < MIN_LENGTH_PASS) {
        errors.push({
          field: "password",
          message: "Password must be greater than or equal to 8 characters!",
        });
      }

      if (!REGEX_EMAIL.test(email)) {
        errors.push({
          field: "email",
          message: "Email invalid!",
        });
      }

			return res.status(400).json({
				status: 400,
				message: 'Bad request',
				errors: errors
			});
    }

    next();
	});

	initializeRoutes() {
		this._router.post(
			`${this._path}/register`,
			this.validateBeforeCreateAccount,
      this.registerAccount
		);
	}
}

module.exports = UserController;