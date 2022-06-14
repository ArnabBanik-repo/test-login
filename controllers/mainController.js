exports.loginPage = (req, res) => {
    res.render('login')
}

exports.profilePage = (req, res) => {
    res.render('dashboard', { username: req.user.displayName })
}

exports.failPage = (req, res) => {
    res.send(
        "<p>Please use a vit student account</p><a href = '/'>Back to login</a>"
    )
}

exports.logOut = (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err)
        }
        req.session.destroy((err) => {
            if (err) {
                return next(err)
            }
            res.redirect('/')
        })
    })
}
