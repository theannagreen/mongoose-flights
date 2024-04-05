const mongoose = require('mongoose');

//define ticket schema 
const ticketSchema = new mongoose.Schema({
    seat: {
        type: String,
        required: true,
        // adding format a1 - f99
        match: /^[A-F]\d{1,2}$/
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    flight: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight',
        required: true,
    }
});

// put schema into model 
const Ticket = mongoose.model('Ticket', ticketSchema);

// export the ticket model 
module.exports = Ticket;
