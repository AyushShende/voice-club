import mongoose from 'mongoose';
import { DB_URL } from './config/index.js';

const connect = async () => {
  await mongoose.connect(DB_URL);
  console.log('DB Connection Successful');
};

export default connect;
