import { BASE_URL } from '../config/index.js';
class UserDto {
  id;
  phone;
  name;
  avatar;
  activated;
  createdAt;

  constructor(user) {
    this.id = user._id;
    this.phone = user.phone;
    this.name = user.name;
    this.avatar = user.avatar ? `${BASE_URL}${user.avatar}` : null;
    this.activated = user.activated;
    this.createdAt = user.createdAt;
  }
}

export default UserDto;
