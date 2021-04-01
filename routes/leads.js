const crudLeads = (app) => {

    const Lead = require('../models/leads.js');

    //FUNCIONES DE ENDPOINTS
    //GET - Devuelve todas los Leads en la base
    findAllLeads = (req, res) => {
        Lead.find((err, leads) => {
            if (!err) {
                console.log('GET /leads')
                res.send(leads);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //POST - Insert a new TVShow in the DB
    addLead = function (req, res) {
        console.log('POST');
        console.log(req.body);

        var lead = new Lead({
            id: req.body.id,
            nombre: req.body.nombre,
            email: req.body.email,
            sexo: req.body.sexo,
            comentarios: req.body.comentarios
        });

        lead.save(function (err) {
            if (!err) {
                console.log('Created');
            } else {
                console.log('ERROR: ' + err);
            }
        });

        res.send(lead);
    };


    //Rutas de la API, asociadas a una función
    app.get('/leads', findAllLeads);
    app.post('/leads', addLead);
}

module.exports = crudLeads;