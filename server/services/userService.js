import User from '../models/userModel.js';

class UserService {
  async findUser(filter) {
    const user = await User.findOne(filter);
    return user;
  }

  async createUser(data) {
    const user = await User.create(data);
    return user;
  }

  async updateUser(userId, data) {
    const user = await User.findByIdAndUpdate(userId, data, {
      new: true,
    });
    return user;
  }
}

export default new UserService();
