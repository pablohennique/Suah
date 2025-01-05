const { Service } = require('../core');
const bcrypt = require('bcrypt');
const { UserRepository } = require('../schema');
const jwt = require('jsonwebtoken');
require("dotenv").config({ path: '../../.env' });

class UserService extends Service {
  async createUser({ email, password }) {
    try {
      const hashPassword = await bcrypt.hash(password, 10);

      return await UserRepository.create({
        email: email,
        password: hashPassword,
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async generateToken(data) {
    return await jwt.sign(data, process.env.SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRED,
      algorithm: "HS256",
    });
  }
}

module.exports = new UserService();