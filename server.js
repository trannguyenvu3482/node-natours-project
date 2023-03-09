const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('unhandledRejection', err => {
  console.log('Unhandled Rejection, shutting down server...');
  console.log(err.name, err.message);
  process.exit(1);
});

process.on('uncaughtException', err => {
  console.log('Uncaught Exception, shutting down server...');
  console.log(err.name, err.message);

  // eslint-disable-next-line no-use-before-define
  server.close(() => {
    process.exit(1);
  });
});

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection successful!');
  });

const port = process.env.PORT || 3000;
// Start server
const server = app.listen(port, () => {
  console.log(`Starting server on port: ${port}`);
});
