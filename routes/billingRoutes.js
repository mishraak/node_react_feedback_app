const bodyParser = require("body-parser");
const keys = require("../config/keys");
const requireLogin = require("../middlewares/requireLogin");

const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
	app.post("/api/stripe", requireLogin, async (req, res) => {
		//console.log(req.body);

		/*
		//refactored into middleware/requireLogin.js
		if(!req.user){
			res.status(401).send({ error: 'You must log in!' });			
		}
		*/
		const charge = await stripe.charges.create({
			amount: 500,
			currency: "usd",
			description: "$5 for 5 Credits",
			source: req.body.id
		});

		//console.log(charge);

		req.user.credits += 5;
		//save is always an async call
		const user = await req.user.save();

		res.send(user);
	});
};
