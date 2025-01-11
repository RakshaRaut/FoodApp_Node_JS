const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { connect } = require('mongoose');
const { connectDB } = require('./config/db');

// dotenv configuration
require('dotenv').config();
const mongoURI = process.env.MONGO_URI;

//DB connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(cors());
app.get(express.json());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route
// URL => https://localhost:8000
app.use("/api/v1/test", require("./routes/testRoute"));
app.use("/api/v1/auth", require("./routes/authRoutes"));

app.get("/", (req, res) => {
    return res.status(200).send("<h1>Welcome to Raksha's Food server </h1>");
});

// PORT
const PORT = process.env.PORT || 5000;

// listen
app.listen(PORT,() => {
    console.log(`server running on ${PORT}`);
});
