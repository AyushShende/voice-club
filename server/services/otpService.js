import crypto from 'crypto';
import hashService from './hashService.js';
import twilio from 'twilio';
import { SMS_AUTH_TOKEN, SMS_SID } from '../config/index.js';

const Twilio = twilio(SMS_SID, SMS_AUTH_TOKEN);

class OtpService {
  async generateOtp() {
    const otp = crypto.randomInt(1000, 9999);
    return otp;
  }

  async sendBySms(phone, otp) {
    return await Twilio.messages.create({
      body: `Your VoiceClub otp is ${otp}`,
      from: process.env.SMS_FROM_NUMBER,
      to: phone,
    });
  }

  verifyOtp(hashedData, data) {
    const computedHash = hashService.hashOtp(data);
    return hashedData === computedHash;
  }
}

export default new OtpService();
