import passport from 'passport';
import localPP from 'passport-local';
import jwtPP from 'passport-jwt';
import fbpp from 'passport-facebook';
import googlepp from 'passport-google-oauth';
import users from '../../config/database/models/users'
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    users.findOne({ where: { username: username }}, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

module.exports = passport;
