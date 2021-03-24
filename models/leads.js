var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var leadSchema = new Schema({
    id:{ type: String },
    nombre:{ type: String },
    email:{ type: String },
    sexo:{ type: String },
    comentarios:{ type: String }
});


module.exports = mongoose.model('Lead', leadSchema,'leads');
