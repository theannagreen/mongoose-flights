// routes/tickets.js
const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

//Display form to add a ticket
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
//Process the form
router.post('/flights/:id/tickets', ticketsCtrl.create); 
// delete ticket 
router.delete('/flights/:id/tickets/:tickets', ticketsCtrl.delete);


module.exports = router;