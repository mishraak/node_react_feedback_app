const express = require('express');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');
const keys=require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');


const app = express();

app.use(cookieSession({
			maxAge: 30 * 24 * 60 * 60 * 1000,
			keys: [keys.cookieKey] // if an array, chooses randomly - additional layer of security
	   })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
mongoose.connect(keys.mongoURI);

app.get('/', (req, res) => {
	res.send({hi : 'there'});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);