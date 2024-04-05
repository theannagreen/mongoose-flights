require('dotenv').config();
// Connect to the database
require('./config/database');

// Require the app's Mongoose models
const Flight = require('./models/flight');

Flight.updateMany({}, { cast: [] })
.then(result => {
  console.log(result);
  console.log('Bulk update operation completed successfully.');
})
.catch(error => {
  console.error('An error occurred during bulk update:', error);
});