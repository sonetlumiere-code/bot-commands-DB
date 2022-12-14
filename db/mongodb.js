'use strict'

const mongoose = require('mongoose')
const initialSetup = require('../models/initial_setup');
require('../models/settings.model')

const mongoDB_settings = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 90000
}

mongoose.connect(process.env.MONGODB_URI, mongoDB_settings, (err) => {
    if (!err) {
        initialSetup.createSettings()
        console.log('MongoDB connection succeeded.')
    } else {
        console.log('Error in MongoDB connection : ' + err)
    }
})
