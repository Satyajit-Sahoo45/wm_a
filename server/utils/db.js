const mongoose = require('mongoose')
require("dotenv").config();

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/clinic";
const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl).then((data) => {
            console.log(
                `Database connection established with ${data.connection.host}`
            );
        });
    } catch (error) {
        console.log(error.message);
        setTimeout(connectDB, 5000);
    }
};

module.exports = connectDB; 