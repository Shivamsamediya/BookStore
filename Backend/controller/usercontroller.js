import User from "../models/usermodel.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPassword = await bcryptjs.hash(password, 10);
        
        const createdUser = new User({
            email: email,
            username: username,
            password: hashPassword
        });
        await createdUser.save();
        
        res.status(201).json({
            message: "User created successfully!",
            user: {
                username: createdUser.username,
                _id: createdUser._id,
                email: createdUser.email
            }
        });
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid username or password!" });
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password!" });
        }

        res.status(200).json({
            message: "Logged in successfully!",
            user: {
                username: user.username,
                _id: user._id,
                email: user.email
            }
        });
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
