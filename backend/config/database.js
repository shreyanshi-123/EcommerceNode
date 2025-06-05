require('dotenv').config();
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

mongoose.set("strictQuery", false);

const connectDatabase = () => { mongoose.connect(`${process.env.MONGO_URI}`).then(() => {
    console.log("connection successful!...");
}).catch((err) => {
    console.log(`connection failed!.... ${err}`);
});
}

module.exports = connectDatabase;