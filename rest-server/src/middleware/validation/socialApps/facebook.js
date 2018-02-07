require('dotenv').config(); // just for testing

const passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

const User = require('../../../config/database/models/users'); //need to change
const FBAPP_ID = process.env.FBAPP_ID;
const FBAPP_SECRET = process.env.FBAPP_SECRET;

passport.use(new FacebookStrategy({
    clientID: FBAPP_ID,
    clientSecret: FBAPP_SECRET,
    callbackURL: "http://127.0.0.1:3030/api/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({name: profile.displayName}, {name: profile.displayName,userid: profile.id}, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

module.exports = passport;
//need to use jwt