exports.loginPage = (req, res) => {
    res.render('login')
}

exports.profilePage = (req, res) => {
    if (req.user.email.indexOf('vitstudent.ac.in') == -1) res.redirect('/fail')
    else res.render('dashboard', { username: req.user.displayName })
}

exports.failPage = (req, res) => {
    if (req.user)
        req.logout(function (err) {
            if (err) {
                return next(err)
            }
            res.redirect('/')
        })
    res.send(
        "<p>Please use a VIT email account</p><a href = '/'>Back to login</a>"
    )
}

exports.logOut = (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err)
        }
        res.redirect('/')
    })
}
