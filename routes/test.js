const { info } = require("../controller/controller")
const express = require('express')
const router = express.Router()

router.route('/info').get(info)


module.exports = router