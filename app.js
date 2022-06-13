const express = require('express')
const userRouter = require('./routes/userRouter')
const app = express()
app.use(express.json())
app.set('view engine', 'ejs')
app.use('/api/v1/users', userRouter)
module.exports = app
