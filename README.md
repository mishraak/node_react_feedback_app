# FeedbackApp

# Info : Feedback collection app for product owner, also usable to conduct any survey

## Below features have been implemented:
1. Google OAuth Integration with the App
2. Handling credits and top-up using Stripe payment APIs
3. Integrated Sendgrid Node JS APIs with the app
4. Reviewing Survey content before sending email
5. Reviewing Response from the user as they respond
6. App deployed on Heroku.com
7. MongoDB Cloud instance on mLab is used to make app scalable
8. Hiding private keys for security reasons
9. Data validation in the forms
10. Handled private keys for APIs using a separate config file which is not checked into repo

## Technologies used:
1. Node JS for the backend
2. Express JS for the middleware services
3. Passport JS for authentication (used Google Strategy)
4. Integration with Google OAuth (part of Google + APIs)
5. React JS for front end
6. Redux for easy state management
7. Redux-form for easily handling forms in the front-end
8. MongoDB instance on mLab
9. Used Mongoose Library to handle MongoDB and ExpressJS interaction
10. Babel, Webpack
11. Heroku local and remote env set up and integration, build and deployment 
12. Stripe for handling payments.
13. SendGrid for handling email activities like sending email, creating webhook
14. Localtunnel to create a webhook on local environment for testing purpose

## In order to test the app,

Sign in to https://blooming-ridge-82966.herokuapp.com using Google Account
Every new user is provided with 3 initial credits.
In order to recharge, you may enter 4242 4242 4242 4242 as the fake credit card numnber, any CVV and any future date within 5 years
Create and send surveys
Respond to the survey using received email
Check for the survey stats on the home dashboard at /surveys path