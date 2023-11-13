const router = require("express").Router();
const {
  calculateScore,
} = require("../controllers/financialDataController");



router.post('/calculate-score', calculateScore)

module.exports = router