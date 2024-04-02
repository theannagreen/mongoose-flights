const Flight = require('../models/flights');

// set up module.exports
module.exports = {
    new: newFlight,
    create,
    index,
    show
};

// set up controller functions
function newFlight(req, res) {
    console.log(__dirname);
    res.render('flights/new', { title: 'New Flight', errorMsg: '' });
}


async function create(req, res) {
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (error) {
        console.log(error);
        res.render('error', { message: 'error creating flight' });
    }
}


async function index(req, res) {
    try {
        const flights = await Flight.find({}).sort('departs');
        res.render('flights/index', { title: 'All Flights', flights: flights, now: new Date() });
    } catch (error) {
        console.log(error);
        res.render('error', { message: 'error pulling flights' });
    }
}


async function show(req, res) {
    try {
        const flight = await Flight.findById(req.params.id);
        res.render('flights/show', { title: 'Flight Detail', flight: flight});
    } catch (error) {
    console.log(error);
    res.render('error', { message: 'error getting flight details'});
    }
}