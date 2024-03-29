const express = require("express"),
    app = express(),
    methodOverride = require("method-override"),
    http = require("http"),
    server = http.createServer(app),
    mongoose = require('mongoose');

// Connection to DB
mongoose.connect(
    'mongodb+srv://maimo:dKiw8vPdNBfIQzRD@cluster0.jkpmu.mongodb.net/leadsdb?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, res) {
        try {
            console.log('Connected to Database');
        } catch (err) {
            console.log(err)
            throw err;
        }
    });

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride());
const cors = require('cors')
app.use(cors())

routes = require('./routes/leads')(app);
routes = require('./routes/prices')(app);

app.get('/', function (req, res) {
    res.send("Welcome to the machine ...");
});

server.listen(process.env.PORT || 4000, function () {
    console.log("Node server running on http://localhost:4000");
});

module.exports = app;