import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./routes/bookroute.js";
import userRoute from "./routes/userroute.js";

const app = express();
const PORT = 4001;

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/BookBound', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit process with failure
  }
};

// Middleware
app.use(cors(
  {
    origin:["https://book-store-frontend-amber.vercel.app/"],
    methods:["POST", "GET"],
    credentials:true
  }
));
app.use(express.json());

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to the database
connectDB();
