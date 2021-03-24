var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    http = require("http"),
    server = http.createServer(app),
    mongoose = require('mongoose');

// Connection to DB
mongoose.connect('mongodb+srv://maimo:dKiw8vPdNBfIQzRD@cluster0.jkpmu.mongodb.net/leadsdb?retryWrites=true&w=majority', function (err, res) {
    if (err) throw err;
    console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
var cors = require('cors')
app.use(cors())

routes = require('./routes/leads')(app);

app.get('/', function (req, res) {
    res.send("Welcome to the machine ...");
});

server.listen(process.env.PORT || 3000, function () {
    console.log("Node server running on http://localhost:3001");
});

module.exports = app;