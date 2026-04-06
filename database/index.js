const mongoose = require('mongoose');

async function connectToDatabase() {
    await mongoose.connect('mongodb+srv://digitalkushal:kushalrokaya@cluster0.xife79a.mongodb.net/?appName=Cluster0')
    console.log("Database is connected successfully");
}

module.exports = connectToDatabase;