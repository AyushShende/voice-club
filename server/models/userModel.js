import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: [true, 'Please enter phone'],
    },
    name: {
      type: String,
    },
    avatar: {
      type: String,
    },
    activated: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', userSchema);
