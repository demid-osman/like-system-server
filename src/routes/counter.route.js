const express = require('express')
const router = express.Router()
const controller = require('../controllers/counter.controller')

// Create
router.post('/', controller.create)

// Get all
router.get('/', controller.getAll)

// Get by ID
router.get('/:id', controller.getOne)

// Update by ID
router.put('/:id', controller.update)

// Delete by ID
router.delete('/:id', controller.delete)

module.exports = router