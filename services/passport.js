const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/key");
const mongoose = require("mongoose");

const User = mongoose.model("users");
passport.serializeUser((user, done) => {
  //searlize the user
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GoogleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: keys.callbackURL
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({
        googleId: profile.id
      }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
