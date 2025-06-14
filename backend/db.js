const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI

const connectToMongo = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to MongoDB');
            // perform database operations here
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });

}

module.exports = connectToMongo;