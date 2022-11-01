const app = require('./app');
const dotenv = require('dotenv');
const port = 3000;

dotenv.config({ path: './config.env' });

// Start server
app.listen(port, () => {
  console.log('Listening on port 3000');
});
