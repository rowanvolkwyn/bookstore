const express = require('express');
const { connectToDb, getDb } = require('./db');

//initialise the app and middleware
const app = express();

let db;

//connect to database
connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log('app listening on port 3000');
        })
        db = getDb();
    }
})



// routes
app.get('/books', (req, res) => {
    res.json({mssg: "sample message"});
})