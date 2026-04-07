const mongoose = require('mongoose');

async function connectToDatabase() {
<<<<<<< HEAD
    await mongoose.connect(process.env.MONGODB_URI)
=======
    await mongoose.connect( )
>>>>>>> beeb9207039b87026505c0d418057149aa6769e8
    console.log("Database is connected successfully");
}

module.exports = connectToDatabase;
