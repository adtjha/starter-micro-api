const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(cors()); // Allow cross-origin requests

// Database connection
const MONGODB_URI = 'mongodb+srv://adtjha1:jAJ3DBjLG65KGp5r@formbuilder.2mlnin7.mongodb.net/'; // Replace with your MongoDB URI
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
