// 1. require the mongoose module 
const mongoose = require('mongoose');
// 2. establish connection 
mongoose.connect(process.env.DATABASE_URL);

// shortcut to see if mongoose connection was sucessful 
// 3. set up connected event listener 


// 3.1 set up a shortcut variable 
const db = mongoose.connection;
// 3.2 set up event listener 
db.on('connected', function() {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});