const express = require('express');
const router = express.Router();
const Companies = require("../models/Company.model");

/* GET companies listing. */
router.get('/', function(req, res, next) {
  Companies.find()
  .then((companies) => {
    res.json(companies);
  })
  .catch(next)
});

module.exports = router;


/* add a company item */
router.post("/add", (req,res,next) => {
  Companies.create(req.body)
		.then((newCompany) => {
      console.log("a new company added", newCompany)
			res.redirect("/companies");
		})
		.catch(next);
});

// delete a company 
router.get("/:id/delete", deleteCompany);

const deleteCompany = async (req, res) => {
	const id = req.params.id;
	try {
		const deleted = await Companies.findByIdAndDelete(id);
		console.log("deleted companies: ", deleted);
		res.redirect("/companies");
	} catch (error) {
		console.error(error);
	}
};



//filter a company by its name
router.get("/filter", filterACompany);

const filterACompany = async (req, res) => {
  try {
	const filteredCompany = await Companies.find({ name: req.query.q });
  res.json(filteredCompany);
  } catch(error) {
    console.log(error);
  }
};




// sort a company 

