const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
  console.log('Listening on port 3000');
});
