const express = require('express');
const TrainControlller = require('../Controllers/TrainController');
const router = express.Router();



router.post('/seatinsert',TrainControlller.seat_insert)
router.get('/seatdisplay',TrainControlller.seatsall)
router.post('/seatupdate',TrainControlller.updateseat)

module.exports = router