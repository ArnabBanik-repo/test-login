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

exports.listPage = (req, res) => {
    res.render('list', {
        name: req.user.given_name,
        email: req.user.email,
    });
};

exports.displayProduct = (req, res) => {
    res.render('product', { ...req.params.id });
};
