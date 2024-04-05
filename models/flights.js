// We define the schema,
// 1) require our deps and setup shortcut variable
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// 3) define the destination Schema 
const destinationSchema = new Schema({
    airport: { 
        type: String, 
        enum: ['AUS', 'JFK', 'LGA', 'LAX', 'AVL'],
        required: true
    },
    departure: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});


// 2) define flight schema
const flightSchema = new Schema({
    airline: {
        type: String,
        required: true
    }, 
    flightNumber: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true,
        default: "Default Content"
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);

// const movieSchema = new Schema({
    //     title: {
        //         type: String,
        //         required: true
        //     },
        //     reviews: [reviewSchema]
        // });
        // const Movie = mongoose.model('Movie', movieSchema);
        // // const flightSchema = new Schema({
            // //     airline: String,
            // //     airport: String,
            // //     flightNum: Number,
            // //     departs: Date,
            // //     onTime: Boolean
            // // }, {timestamps: true});
            
            // /*
            // timestamps = true will create two addtional field
            // createAt
            // updatedAt
            // */
            
// // Compile the schema into a model, and
// // Export that model.
