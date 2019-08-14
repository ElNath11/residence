const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResidenceSchema = new Schema({
  	title: { type: String },
  	full_name: { type: String },
	age: { type: Number },
	address: { type: String },
	email: { type: String },
	phone: { type: String },
	house_status: { type: String },
	lived_since: { type: Number },
	family_member: { type: Number }
});

mongoose.model('residence', ResidenceSchema);
