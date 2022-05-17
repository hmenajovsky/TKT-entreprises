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
