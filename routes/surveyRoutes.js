const surveyTemplate = require("../services/emailTemplates/surveyTemplate");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const _ = require("lodash");
const Path = require("path-parser");
const { URL } = require("url");

const Survey = mongoose.model("surveys");

module.exports = app => {
	app.get("/api/surveys", requireLogin, async (req, res) => {
		const surveys = await Survey.find({ _user: req.user.id }).select({
			recipients: false
		});
		res.send(surveys);
	});

	app.get("/api/surveys/:surveyId/:choice", (req, res) => {
		res.send("Thanks for providing the feedback!");
	});

	app.post("/api/surveys/webhooks", (req, res) => {
		console.log("webhook request body : \n " + req.body);

		const p = new Path("/api/surveys/:surveyId/:choice");

		const events = _.chain(req.bo)
			.map(({ email, url }) => {
				const match = p.test(new URL(url).pathname);
				if (match) {
					return {
						email,
						surveyId: match.surveyId,
						choice: match.choice
					};
				}
			})
			.compact()
			.uniqBy("email", "surveyId")
			.each(({ surveyId, email, choice }) => {
				Survey.updateOne(
					{
						_id: surveyId,
						recipients: {
							$elemMatch: { email: email, responded: false }
						}
					},
					{
						$inc: { [choice]: 1 },
						$set: { "recipients.$.responded": true },
						lastResponded: new Date()
					}
				).exec();
			})
			.value();

			console.log("Events received on webhook : \n" + events);				
			res.send({});
	});

	app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
		const { title, subject, body, recipients } = req.body;

		const survey = new Survey({
			title,
			subject,
			body,
			recipients: recipients.split(",").map(email => {
				return { email: email.trim() };
			}),
			_user: req.user.id,
			dateSent: Date.now()
		});
		try {
			//construct Mail
			const mailer = new Mailer(survey, surveyTemplate(survey));
			await mailer.send();
			const my = await survey.save();
			req.user.credits = req.user.credits - 1;
			const user = await req.user.save();
			res.send(user);
		} catch (err) {
			res.status(422).send({ err });
		}
	});
};
