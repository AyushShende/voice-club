import mongoose from 'mongoose';

const refreshSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, 'Please enter token'],
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Refresh', refreshSchema);
