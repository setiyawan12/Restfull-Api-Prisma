const bookRoutes = require('express').Router()
const booksController = require('../controllers/booksController')
const authMidleware = require('../helper/authMidleware')

bookRoutes.post('/', authMidleware.checkLogin,booksController.createbooksUsers)
bookRoutes.get('/show',booksController.getBooks)
bookRoutes.get('/',authMidleware.checkLogin,booksController.getBooksByUser)
bookRoutes.delete('/:id',authMidleware.checkLogin,booksController.deleteBooks)
bookRoutes.put('/:id',authMidleware.checkLogin,booksController.updateBooks)

module.exports = bookRoutes