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
