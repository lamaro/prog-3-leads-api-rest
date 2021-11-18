var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var leadSchema = new Schema({
    id:{ type: String },
    title:{ type: String },
    description:{ type: Array },
    buttonText:{ type: String },
    buttonVariant:{ type: String }
});


module.exports = mongoose.model('Price', leadSchema,'prices');
