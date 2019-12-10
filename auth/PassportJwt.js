const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
var User = require('../models/userModel');
const key = require('./secretKey');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = key.secretOrKey;

module.exports = passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
        .then(User => {
            if (User) {
                return done(null, User);
            }
            return done(null, false);
        })
        .catch(error => console.log(error))
    })
)