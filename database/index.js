const mongoose = require('mongoose');

async function connectToDatabase() {
    await mongoose.connect( )
    console.log("Database is connected successfully");
}

module.exports = connectToDatabase;
