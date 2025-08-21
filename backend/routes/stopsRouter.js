const express = require('express')
const connection = require('../data/connection')
const router = express.Router()
const stopscontroller = require('../controllers/stopsController')


router.get('/', stopscontroller.index)

router.get('/:id', stopscontroller.show)

router.post('/', stopscontroller.post)

module.exports = router