#FeedbackApp

Info : Feedback collection app for product owner, also usable to conduct any survey

Below features have been implemented:

Google OAuth Integration with the App
Handling credits and top-up using Stripe payment APIs
Integrated Sendgrid Node JS APIs with the app
Reviewing Survey content before sending email
Reviewing Response from the user as they respond
App deployed on Heroku.com
Hiding private keys for security reasons
Data validation in the forms
Technologies used:

Node JS for the backend
Express JS for the middleware services
Passport JS for authentication (used Google Strategy)
Integration with Google OAuth (part of Google + APIs)
React JS for front end
Redux for easy state management
Redux-form for easily handling forms in the front-end
Babel, Webpack
Heroku local and remote env set up and integration, build and deployment 
Stripe for handling payments.
SendGrid for handling email activities like sending email, creating webhook
Localtunnel to create a webhook on local environment for testing purpose

In order to test the app,

Sign in to https://blooming-ridge-82966.herokuapp.com using Google Account
Every new user is provided with 3 initial credits.
In order to recharge, you may enter 4242 4242 4242 4242 as the fake credit card numnber, any CVV and any future date within 5 years
Create and send surveys
Respond to the survey using received email
Check for the survey stats on the home dashboard at /surveys path