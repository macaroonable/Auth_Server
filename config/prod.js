module.exports = {
  GoogleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  callbackURL: "http://dope-stuff.herokuapp.com/auth/google/callback"
};
