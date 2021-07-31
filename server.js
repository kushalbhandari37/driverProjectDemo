const express = require('express');
const schedule = require('node-schedule');
const path = require('path');
const driverRoute = require('./routes/driver');
const driverController = require('./controller/DriverController');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 5000;

//Routes
app.use('/', driverRoute);


//Starts Server
app.listen(PORT,()=>{
    console.log('Server has started')
})

//Updates Driver Location Every 5 Minutes
schedule.scheduleJob('*/5 * * * * *',()=>{
    console.log("****Drivers Location Updating****")
    driverController.updateDriverLocation()    
})