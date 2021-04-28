const mainRouter = require('express').Router();
const authRouter = require('./authRoutes');
const bookRoutes = require('./booksRoutes');
const welcome = require('./welcome')

mainRouter.use('/auth',authRouter);
mainRouter.use('/',welcome);
mainRouter.use('/books',bookRoutes)
module.exports=mainRouter