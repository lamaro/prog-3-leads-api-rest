const crudPrices = (app) => {

    const Price = require('../models/prices.js');

    //FUNCIONES DE ENDPOINTS
    //GET - Devuelve todas los Leads en la base
    findAllPrices = (req, res) => {
        Price.find((err, leads) => {
            if (!err) {
                console.log('GET /prices')
                res.send(leads);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };
    findOnePrice = (req, res) => {
        Price.findById(req.params.id, (err, leads) => {
            if (!err) {
                console.log('GET /prices')
                res.send(leads);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //Rutas de la API, asociadas a una función
    app.get('/prices', findAllPrices);
    app.get('/price/:id', findOnePrice);
}

module.exports = crudPrices;