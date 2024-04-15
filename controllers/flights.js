// import flight model 
const Flight = require('../models/flight');

// set up module.exports
module.exports = {
    new: newFlight,
    create,
    index,
    show
};

// set up controller functions to render the new flight form 
async function newFlight(req, res) {
    const newFlight = new Flight();
    // Obtain the default date
    const dt = newFlight.departs;
}

// controller function to handle flight creation 
async function create(req, res) {
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (error) {
        console.log(error);
        res.render('error', { message: 'error creating flight' });
    }
}

// controller function to render the list of all flights 
async function index(req, res) {
    try {
        const flights = await Flight.find({}).sort('departs');
        res.render('flights/index', { title: 'All Flights', flights: flights, now: new Date() });
    } catch (error) {
        console.log(error);
        res.render('error', { message: 'error pulling flights' });
    }
}

// controller function to render the details of a specific flight 
async function show(req, res) {
    try {
        const flight = await Flight.findById(req.params.id)
            .populate('destinations')
            .populate('tickets');
        if (!flight) {
            return res.status(404).send('Flight not found');
        }
        // Define availableAirports here or fetch it from somewhere
        const availableAirports = ['AUS', 'JFK', 'LGA', 'LAX', 'AVL'];
        res.render('flights/show', { title: 'Flight Detail', flight, availableAirports });
    } catch (error) {
        console.log(error);
        res.render('error', { message: 'Error retrieving flight details' })
    }
}

