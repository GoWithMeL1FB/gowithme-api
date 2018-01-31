const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/User');
const GOOGLE_ID = process.env.GOOGLE_ID;
const GOOGLE_SECRET = process.env.GOOGLE_SECRET;


passport.use(new GoogleStrategy({
    clientID: GOOGLE_ID,
    clientSecret: GOOGLE_SECRET,
    callbackURL: "http://127.0.0.1:3050/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ userid: profile.id }, { name: profile.displayName,userid: profile.id }, function (err, user) {
         return done(err, user);
       });
  }
));

module.exports = passport;

//USE JWT