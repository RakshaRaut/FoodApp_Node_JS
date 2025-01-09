const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

// dotenv configuration
dotenv.config({})

// rest object
const app = express();

// middlewares
app.use(cors());
app.get(express.json());
app.use(morgan("dev"));

// route
// URL => https://localhost:8000
app.use("/api/v1/test", require("./routes/testRoute"));

app.get("/", (req, res) => {
    return res.status(200).send("<h1>Welcome to Raksha's Food server </h1>");
});

// PORT
const PORT = process.env.PORT || 5000;

// listen
app.listen(PORT,() => {
    console.log(`server running on ${PORT}`);
});
