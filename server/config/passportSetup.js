const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

require('dotenv').config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

passport.use(new GoogleStrategy({
	//options for the google strategy
	clientID: CLIENT_ID,
	clientSecret: CLIENT_SECRET,
	callbackURL:'/auth/redirect'
}, () => {
	//passport callback function
	
});