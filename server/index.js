const express = require('express');
// how to handle authentication
const passport = require('passport');
// specifics for passport
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
passport.use(new GoogleStrategy());

// set port dynamically
const PORT = process.env.PORT || 5000;
app.listen(PORT);
