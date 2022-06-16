const express = require('express');
const passport = require('passport');

const {
    loginPage,
    profilePage,
    failPage,
    logOut,
    listPage,
    displayProduct,
} = require('../controllers/mainController');

const router = express.Router();

function isLoggedIn(req, res, next) {
    req.user ? next() : res.redirect('/');
}

router.route('/').get(loginPage);
router.use(
    '/google/auth',
    passport.authenticate('google', {
        scope: ['email', 'profile'],
        hostedDomain: 'vitstudent.ac.in',
    })
);

router.use('/profile', isLoggedIn);
router.route('/profile').get(profilePage);

router.use('/listProduct', isLoggedIn);
router.route('/listProduct').get(listPage);

router.route('/fail').get(failPage);

router.use(
    '/dashboard',
    passport.authenticate('google', {
        successRedirect: '/profile',
        failureRedirect: '/fail',
    })
);

router.get('/logout', logOut);

router.get('/displayProduct/:id', displayProduct);

module.exports = router;
