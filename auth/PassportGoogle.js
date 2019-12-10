const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = passport.use(new GoogleStrategy({
    clientID: "224808585716-ug143ut11psgug99c2c6q1jtu0i2q68m.apps.googleusercontent.com",
    clientSecret: "224808585716-ug143ut11psgug99c2c6q1jtu0i2q68m.apps.googleusercontent.com",
    callbackURL: "http://localhost:3000/api/auth/google/callback"
}, function (accessToken, refreshToken, profile, verifyCallback){
    console.log("profile: "+profile);
    verifyCallback(null, profile);
}))