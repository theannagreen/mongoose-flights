require('dotenv').config();
// Connect to the database
require('./config/database');

// Require the app's Mongoose models
const Flight = require('./models/flights');
const Performer = require('./models/performer');