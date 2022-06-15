const User = require('../models/user');
exports.loginPage = (req, res) => {
    res.render('login');
};

exports.profilePage = (req, res) => {
    res.render('dashboard', {
        username: req.user.given_name,
        email: req.user.email,
    });
};

exports.failPage = (req, res) => {
    res.send(
        "<p>Please use a vit student account</p><a href = '/'>Back to login</a>"
    );
};

exports.logOut = (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.session.destroy((err) => {
            if (err) {
                return next(err);
            }
            res.redirect('/');
        });
    });
};

// exports.addPhone = async (req, res) => {
//     let id = await User.findOne({ email: req.body.email });
//     id = id._id;

//     res.status(200).json({
//         status: 'success',
//         data: { msg: 'okay' },
//     });
// };
