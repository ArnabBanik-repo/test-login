const express = require('express');
require('./auth');
const mainRouter = require('./routes/mainRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const passport = require('passport');
const express_session = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.use(express_session({ secret: 'asg' }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/', mainRouter);
module.exports = app;
