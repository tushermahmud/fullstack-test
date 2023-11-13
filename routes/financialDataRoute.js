const router = require("express").Router();
const {
  calculateScore,
} = require("../controllers/financialDataController");
const {check} = require("express-validator");


router.post('/calculate-score', calculateScore)

module.exports = router