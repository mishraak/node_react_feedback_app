const express = require('express');
const mongoose = require('mongoose');
require('./models/User');
require('./models/Survey');
require('./services/passport');
const keys=require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cookieSession({
			maxAge: 30 * 24 * 60 * 60 * 1000,
			keys: [keys.cookieKey] // if an array, chooses randomly - additional layer of security
	   })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV === 'production'){
	//Making sure express will serve production assets like main.js or main.css
	app.use(express.static('client/build'));

	//express will serve up index.html file if it doesn't recognize any route or is not defined on server
	const path = require('path');

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}


mongoose.connect(keys.mongoURI);

app.get('/', (req, res) => {
	res.send({hi : 'there'});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);