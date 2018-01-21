const passport = require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const keys=require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id)
	.then(user => {
		done(null, user);
	})
});


//Registered at: https://console.developers.google.com
//GoogleStrategy's internal name - 'google'

passport.use(new GoogleStrategy({
					clientID: keys.googleClientID,
					clientSecret: keys.googleClientSecret,
					callbackURL: '/auth/google/callback'
				}, 
				(accessToken, refreshToken, profile, done ) => {
					//console.log('accessToken', accessToken);
					//console.log('refreshToken', refreshToken);
					//console.log('profile', profile);
					User.findOne({googleId: profile.id})
					.then((existingUser) => {
						if (existingUser){
							//Do nothing as we already ahave a user record with the googleId
							done(null , existingUser);
						} else {
							new User({ googleId: profile.id })
							.save()
							.then(user => done(null, user));
						}
					 })
					
				})
);