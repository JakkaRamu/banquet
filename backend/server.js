import express from 'express';
import { db } from './config/db.js';
import { createSignupTable, createSignupTableForBusiness } from './models/signup.model.js';
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import { serialize } from "cookie";
import { verifyToken } from '../frontend/middleware/auth.js';
import cookieParser from 'cookie-parser'; // Import cookie-parser

import util from "util";

// Convert db.query into a promise-based function
const query = util.promisify(db.query).bind(db);

const app = express();
app.use(express.json());
app.use(cookieParser()); // Use cookie-parser middleware

app.use(cors({
    origin: "http://localhost:3000", // Change this to match your frontend URL
    credentials: true,
}));

app.get("/api/protected-route", verifyToken, (req, res) => {
    res.json({ success: true, message: "Access granted", user: req.user });
});

// User Signup API
app.post("/api/users", (req, res) => {
    console.log("Received POST request at /api/users");
    console.log("Request body:", req.body);

    const { username, email, phone, password } = req.body;
    if (!username || !email || !phone || !password) {
        console.log("Missing fields in request body");
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const sql = "INSERT INTO users (username, email, phone, password) VALUES (?, ?, ?, ?)";
    
    db.query(sql, [username, email, phone, hashedPassword], (err, result) => {
        if (err) {
            console.error("Error inserting user into database:", err);
            return res.status(500).json({ success: false, message: "Database error", error: err.message });
        }

        console.log("User inserted successfully with ID:", result.insertId);
        res.status(201).json({
            success: true,
            data: { id: result.insertId, username, email, phone }
        });
    });
});

app.post("/api/business", (req, res) => {
    console.log("Received POST request at /api/business");
    console.log("Request body:", req.body);

    const { vendorName, brandName, city, email, phone, password } = req.body;

    if (!vendorName || !brandName || !city || !email || !phone || !password) {
        console.log("Missing fields in request body");
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);

    const sql = "INSERT INTO business (vendor_name, brand_name, city, email, phone, password) VALUES (?, ?, ?, ?, ?, ?)";
    
    db.query(sql, [vendorName, brandName, city, email, phone, hashedPassword], (err, result) => {
        if (err) {
            console.error("Error inserting business:", err);
            return res.status(500).json({ success: false, message: "Server Error" });
        }
        console.log("Business inserted successfully with ID:", result.insertId);
        res.status(201).json({
            success: true,
            data: { id: result.insertId, vendorName, brandName, city, email, phone }
        });
    });
});

app.post("/api/vendor-login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Please provide email and password" });
    }

    const sql = "SELECT * FROM business WHERE email = ?";
    db.query(sql, [email], (err, results) => {
        if (err) {
            console.error("Error querying database:", err);
            return res.status(500).json({ success: false, message: "Server Error" });
        }
        const user = results[0];
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }
        const token = jwt.sign(
            { id: user.insertId, email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        console.log("Generated JWT token:", token);
        const cookieOption = serialize("authToken", token, {
            httpOnly: true,
            secure: false, // Set to false for development
            sameSite: "strict",
            path: "/",
            maxAge: 3600,
        });
        res.setHeader("Set-Cookie", [cookieOption]);
        return res.json({ success: true, message: "Login successful", vendor: user, token });
    });
});

app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Please provide email and password" });
    }

    try {
        // Query user by email only (DO NOT include password in SQL query)
        const results = await query("SELECT * FROM users WHERE email = ?", [email]);

        if (results.length === 0) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        const user = results[0];

        // Compare hashed password
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        console.log("Generated JWT token:", token);

        // Set HTTP-only cookie
        const cookieOption = serialize("authToken", token, {
            httpOnly: true,
            secure: false, // Set to false for development
            sameSite: "strict",
            path: "/",
            maxAge: 3600,
        });

        res.setHeader("Set-Cookie", [cookieOption]);
        console.log("Set-Cookie header:", cookieOption); // Log the Set-Cookie header for debugging
        return res.json({ success: true, message: "Login successful", user, token });

    } catch (err) {
        console.error("Database query error:", err);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
});

// MySQL Connection & Server Start
db.connect((err) => {
    if (err) {
        console.error("MySQL connection failed:", err);
        process.exit(1);
    }
    console.log("MySQL Connected");

    createSignupTable();
    createSignupTableForBusiness();

    const port = 8500;
    app.listen(port, () => {
        console.log(`Server started on http://localhost:${port}`);
    });
});
