const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(new GoogleStrategy({
	//options for the google strategy
	clientID: '',
	clientSecret: ''
}), () => {
	//passport callback function
})