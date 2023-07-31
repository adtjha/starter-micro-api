const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(cors()); // Allow cross-origin requests

// Database connection
// const MONGODB_URI = `mongodb+srv://adtjha1:${process.env.MONGODB_PASS}@formbuilder.2mlnin7.mongodb.net/`; // Replace with your MongoDB URI
const MONGODB_URI = `mongodb+srv://adtjha1:juQNoAzrPEHNqtU9trAWTQQANeOJsrhIsAGZM9yGHChixeUJH4GZQmSEMQj3seDT@formbuilder.2mlnin7.mongodb.net/`; // Replace with your MongoDB URI
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Routes
const formRoutes = require('./routes/formRoutes');
const questionRoutes = require('./routes/questionRoutes');
const responseRoutes = require('./routes/responseRoutes');


app.use('/api', formRoutes);
app.use('/api', questionRoutes);
app.use('/api', responseRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.get('/', (req, res) => {
    res.send("Yo")
})
