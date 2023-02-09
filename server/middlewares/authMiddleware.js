import AppError from '../services/errorService.js';
import tokenService from '../services/tokenService.js';

const authMiddleware = async (req, res, next) => {
  try {
    const { access_token } = req.cookies;

    if (!access_token) {
      return next(
        new AppError('You are not logged in, please log in to get access', 401)
      );
    }
    const userData = await tokenService.verifyAccessToken(access_token);
    if (!userData) {
      return next(new AppError('Invalid token', 401));
    }
    req.user = userData;
    next();
  } catch (error) {
    return next(new AppError('Invalid token', 401));
  }
};

export default authMiddleware;
