const express = require('express');
const router = express.Router();
const DriverController  = require('../controller/DriverController');

router.get('/api/driver-details',DriverController.getDriverDetails);

module.exports = router;