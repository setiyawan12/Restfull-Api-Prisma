require('dotenv').config({});
const express = require('express');
const app = express();
const mainRouter = require('./src/routes')
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/',mainRouter)
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is Runing Port 3000');
})