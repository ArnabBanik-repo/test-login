const passport = require('passport')
const User = require('./models/user')
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
        async function (request, accessToken, refreshToken, profile, done) {
            if (profile.email.indexOf('vitstudent.ac.in') == -1) {
                return done(null, null)
            }
            await User.findOrCreate({
                name: profile.given_name,
                email: profile.email,
            })
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
