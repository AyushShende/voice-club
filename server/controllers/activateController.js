import AppError from '../services/errorService.js';
import jimp from 'jimp';
import * as path from 'path';
import userService from '../services/userService.js';
import userDto from '../dtos/userDto.js';
import * as url from 'url';

class ActivateController {
  async activate(req, res, next) {
    const { name, avatar } = req.body;
    if (!name || !avatar) {
      return next(new AppError('All fields are required', 400));
    }

    const buffer = Buffer.from(
      avatar.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''),
      'base64'
    );

    const imagePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;

    try {
      const jimpRes = await jimp.read(buffer);
      jimpRes
        .resize(150, jimp.AUTO)
        .write(
          path.resolve(
            url.fileURLToPath(new URL('.', import.meta.url)),
            `../storage/${imagePath}`
          )
        );
    } catch (error) {
      return next(new AppError('Failed Image processing', 500));
    }

    const user = await userService.updateUser(req.user._id, {
      activated: true,
      name,
      avatar: `/storage/${imagePath}`,
    });

    if (!user) {
      return next(new AppError('The user does not exist', 404));
    }

    res.status(200).json({
      status: 'success',
      user: new userDto(user),
    });
  }
}

export default new ActivateController();
