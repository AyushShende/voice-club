// const dotenv = require('dotenv');
// dotenv.config();
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting Down...');
  console.log(err.name, err.message);
  process.exit(1);
});
import app from './app.js';
import { APP_PORT } from './config/index.js';
import connect from './database.js';

const server = app.listen(APP_PORT, async () => {
  await connect();
  console.log(`Server started listening on ${APP_PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting Down...');
  console.log(err.name, err.message);
  server.close(() => process.exit(1));
});
