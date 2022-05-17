const { model, Schema } = require("mongoose");

const companySchema = new Schema({
	name: String,
	sector: String,	
	siren: Number,
	results: Array
});

const Company = model("Entreprises", companySchema);

module.exports = Company;