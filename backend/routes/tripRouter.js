const express = require('express')
const connection = require('../data/connection')
const router = express.Router()
const tripController = require('../controllers/tripControllers')


router.get('/', tripController.index)

router.get('/:id', tripController.show)

router.post('/', tripController.post)

module.exports = router