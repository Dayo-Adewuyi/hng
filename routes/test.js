const { info, operation } = require("../controller/controller")
const express = require('express')
const router = express.Router()

router.route('/info').get(info)
router.route('/').post(operation)


module.exports = router