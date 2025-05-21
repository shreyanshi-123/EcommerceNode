require('dotenv').config();
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

mongoose.set("strictQuery", false);

const connectDatabase = () => { mongoose.connect('mongodb+srv://shreyanshi:wvq9lKZsEp3024Uu@cluster0.ge0id7d.mongodb.net/test', {
    useNewUrlParser: true,
  useUnifiedTopology: true,

}).then(() => {
    console.log("connection successful!...");
}).catch((err) => {
    console.log(`connection failed!.... ${err}`);
});
}

module.exports = connectDatabase;