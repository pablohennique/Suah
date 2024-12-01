const { Service } = require('../core');
const bcrypt = require('bcrypt');
const { UserRepository } = require('../schema');


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
}

module.exports = new UserService();