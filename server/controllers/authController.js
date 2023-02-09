import otpService from '../services/otpService.js';
import hashService from '../services/hashService.js';
import { StatusCodes } from 'http-status-codes';
import userService from '../services/userService.js';
import tokenService from '../services/tokenService.js';
import AppError from '../services/errorService.js';
import userDto from '../dtos/userDto.js';

class AuthController {
  //
  async sendOtp(req, res, next) {
    const { phone } = req.body;

    if (!phone) {
      return next(
        new AppError('Please enter your phone number', StatusCodes.BAD_REQUEST)
      );
    }
    // Generate OTP
    const otp = await otpService.generateOtp();

    // Hash OTP
    const expires = Date.now() + 1000 * 60 * 2;
    const hash = hashService.hashOtp(`${phone}.${otp}.${expires}`);

    // Send OTP by SMS
    // await otpService.sendBySms(phone, otp);

    // Response to client
    res.status(StatusCodes.OK).json({
      status: 'success',
      hash: `${hash}.${expires}`,
      phone,
      otp,
    });
  }

  //
  async verifyOtp(req, res, next) {
    const { otp, hash, phone } = req.body;
    if (!otp || !hash || !phone) {
      return next(
        new AppError('Please enter all fields', StatusCodes.BAD_REQUEST)
      );
    }

    // Check if otp has expired
    const [hashedData, expires] = hash.split('.');
    if (Date.now() > +expires) {
      return next(new AppError('OTP expired', StatusCodes.BAD_REQUEST));
    }

    // Hash the data and then compare it with hashed data
    const data = `${phone}.${otp}.${expires}`;
    const isValid = otpService.verifyOtp(hashedData, data);
    if (!isValid) {
      return next(new AppError('invalid otp', StatusCodes.UNAUTHORIZED));
    }

    // Get or create user
    let user = await userService.findUser({ phone });
    if (!user) {
      user = await userService.createUser({ phone });
    }

    // Token
    const { access_token, refresh_token } = tokenService.generateTokens({
      _id: user._id,
      activated: false,
    });

    // Save refresh token to DB
    await tokenService.storeRefreshToken(refresh_token, user._id);

    res.cookie('refresh_token', refresh_token, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });
    res.cookie('access_token', access_token, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.status(StatusCodes.OK).json({
      status: 'success',
      user: new userDto(user),
    });
  }

  //
  async refresh(req, res, next) {
    // Get refresh token from cookie

    const { refresh_token: refreshTokenFromCookie } = req.cookies;

    if (!refreshTokenFromCookie) {
      return next(
        new AppError('You are not logged in, please log in to get access', 401)
      );
    }
    // Verify received refresh token
    const userData = await tokenService.verifyRefreshToken(
      refreshTokenFromCookie
    );

    if (!userData) {
      return next(new AppError('Invalid token', StatusCodes.UNAUTHORIZED));
    }

    // check if refresh token is in db
    const token = await tokenService.findRefreshToken(
      userData._id,
      refreshTokenFromCookie
    );
    if (!token) {
      return next(new AppError('Invalid token', StatusCodes.UNAUTHORIZED));
    }

    //check if valid user
    const user = await userService.findUser({ _id: userData._id });
    if (!user) {
      return next(new AppError('User does not exist', StatusCodes.NOT_FOUND));
    }

    // Generate new Tokens
    const { access_token, refresh_token } = tokenService.generateTokens({
      _id: userData._id,
    });

    // Update refresh token in DB
    await tokenService.updateRefreshToken(userData._id, refresh_token);

    // send both tokens
    res.cookie('refresh_token', refresh_token, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });
    res.cookie('access_token', access_token, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.status(200).json({
      status: 'success',
      user: new userDto(user),
    });
  }

  async logout(req, res, next) {
    const { refresh_token } = req.cookies;

    //  Delete refresh token from db
    await tokenService.removeToken(refresh_token);

    //  clear cookies
    res.clearCookie('refresh_token');
    res.clearCookie('access_token');

    res.status(200).json({
      status: 'success',
      user: null,
    });
  }
}

export default new AuthController();
