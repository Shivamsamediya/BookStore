import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors";

// Import Routes
import bookRoute from "./routes/bookroute.js";
import userRoute from "./routes/userroute.js";

// Import Book Model
import Book from "./models/booksmodel.js";
import booksData from "./data.js";

dotenv.config();

const app = express();
const PORT = 4001; // Use environment variable for PORT if available

// Middleware
app.use(cors(
  {
    origin:["http://localhost:5173"],
    methods:["POST", "GET"],
    credentials:true
  }
));

app.get('/', (req,res,next) =>{
    res.send("Hello");
});

app.use(express.json());

// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Automatically add sample books if the collection is empty
        const existingBooks = await Book.find();
        if (existingBooks.length === 0) {
            await Book.insertMany(booksData);
            console.log("Sample books added to the database");
        } else {
            console.log("Books already exist in the database");
        }

        // Start the server only if the database connection is successful
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit process with failure
    }
};

// Connect to the database
connectDB();

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
