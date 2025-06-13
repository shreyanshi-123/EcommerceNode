// require('dotenv').config();
// const mongoose = require('mongoose');
// const MONGO_URI = process.env.MONGO_URI;

// mongoose.set("strictQuery", false);

// const connectDatabase = () => { mongoose.connect(`${process.env.MONGO_URI}`).then(() => {
//     console.log("connection successful!...");
// }).catch((err) => {
//     console.log(`connection failed!.... ${err}`);
// });
// }

// module.exports = connectDatabase;


require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

// Cache the connection across hot reloads in development and serverless function invocations
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDatabase() {
  if (cached.conn) {
    // Use cached connection if it exists
    return cached.conn;
  }
  if (!cached.promise) {
    // Create a new connection promise if none exists
    cached.promise = mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(mongoose => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  console.log("MongoDB connection successful!");
  return cached.conn;
}

module.exports = connectDatabase;
