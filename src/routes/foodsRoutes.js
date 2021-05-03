const foodRoutes = require('express').Router()
const foodControllers = require('../controllers/foodsController')

foodRoutes.post('/',foodControllers.createFood)
foodRoutes.get('/',foodControllers.getFoods)
foodRoutes.put('/:id',foodControllers.updateFoods)
foodRoutes.delete('/:id',foodControllers.deletefoods)

module.exports = foodRoutes