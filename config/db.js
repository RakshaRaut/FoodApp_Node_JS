const mongoose = require('mongoose');

// function mongodb database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to Database ${mongoose.connection.host}`);
    } catch (error) {
        console.log("DB Error", error);
    }
};
module.exports = { connectDB };
        
        