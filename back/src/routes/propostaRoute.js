const express = require("express");
const { getAllOrders } = require('../controllers/propostas')

const router = express.Router();
router.route('/').get(getAllOrders)

module.exports = router;