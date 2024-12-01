const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require("bcrypt");

/**
 * Registers a new user.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @throws {Error} - If any of the required fields are missing or if the email already exists.
 */
const registerUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	if ( !password || !email) {
    res.status(400);
    throw new Error('All fields are mandatory.');
  }

	const userAvailable = await User.findOne({email});
  if (userAvailable) {
    res.status(400);
    throw new Error('Email already exists under a another user.');
  }

	// Hash password
	const hashedPassword = await bcrypt.hash(password, 10);
	console.log(hashedPassword);
	const user = await User.create({
		email,
		password: hashedPassword,
	});

	if (user) {
    console.log(`User created: ${user}`);
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error('User data is not valid.');
  }
});

module.exports = { registerUser };
