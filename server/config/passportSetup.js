const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../model/user');

require('dotenv').config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.where('id', id)
		.fetch()
		.then(user => {
			done(null, user);		
		});
})

passport.use(new GoogleStrategy({
	//options for the google strategy
	clientID: CLIENT_ID,
	clientSecret: CLIENT_SECRET,
	callbackURL:'/auth/redirect'
}, (accessToken, refreshToken, profile, done) => {
	//passport callback function
	User.where('googleId', profile.id)
		.fetch()
		.then(currentUser => {
			done(null, currentUser);
		})
		.catch(err => {
			console.log(err);
			new User ({
				fName: profile.name.givenName,
				lName: profile.name.familyName,
				googleId: profile.id
			})
				.save()
				.then(newUser => {
					console.log('created');
					done(null, newUser);
				})
		})
}));