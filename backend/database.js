const mongoose= require ("mongoose");
const colors= require ("colors");
const dotenv= require ("dotenv");
dotenv.config();
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));
