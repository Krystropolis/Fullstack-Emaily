const express = require('express');
// how to handle authentication
const passport = require('passport');
// specifics for passport
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
		},
		accessToken => {
			console.log(accessToken);
		},
	),
);

app.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	}),
);

app.get('/auth/google/callback', passport.authenticate('google'));

// set port dynamically
const PORT = process.env.PORT || 5000;
app.listen(PORT);
