import jwt from 'jsonwebtoken';
import { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } from '../config/index.js';
import Refresh from '../models/refreshModel.js';

class TokenService {
  generateTokens(payload) {
    const access_token = jwt.sign(payload, JWT_ACCESS_SECRET, {
      expiresIn: '1m',
    });
    const refresh_token = jwt.sign(payload, JWT_REFRESH_SECRET, {
      expiresIn: '1y',
    });
    return { access_token, refresh_token };
  }

  async storeRefreshToken(token, userId) {
    await Refresh.create({
      token,
      userId,
    });
  }

  async verifyAccessToken(token) {
    return jwt.verify(token, JWT_ACCESS_SECRET);
  }

  async verifyRefreshToken(token) {
    return jwt.verify(token, JWT_REFRESH_SECRET);
  }

  async findRefreshToken(userId, token) {
    return await Refresh.findOne({
      userId,
      token,
    });
  }

  async updateRefreshToken(userId, token) {
    return await Refresh.updateOne({ userId }, { token });
  }

  async removeToken(token) {
    return await Refresh.deleteOne({ token });
  }
}

export default new TokenService();
