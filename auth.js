const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth2').Strategy

passport.use(
    new GoogleStrategy(
        {
            clientID:
                '688170536615-o6ar68u3va4lge3mnrir0nmppgr48q2c.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3000/dashboard',
            passReqToCallback: true,
        },
        function (request, accessToken, refreshToken, profile, done) {
            return done(null, profile)
        }
    )
)

passport.serializeUser(function (user, done) {
    done(null, user)
})

passport.deserializeUser(function (user, done) {
    done(null, user)
})
