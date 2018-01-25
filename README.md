# FeedbackApp
Feedback collection app for product owner, also usable to conduct any survey

Below features have been implemented:

1. Google OAuth Integration with the App
2. Handling credits and top-up using Stripe payment APIs
3. Integrated Sendgrid Node JS APIs with the app
4. Reviewing Survey content before sending email
5. Reviewing Response from the user as they respond
6. App deployed on Heroku.com
7. Hiding private keys for security reasons
8. Data validation in the forms


Technologies used: 
1. Node JS for the backend 
2. Express JS for the middleware services
3. Passport JS
4. Integration with Google OAuth (part of Google + APIs)
5. Heroku local and remote env set up and integration
6. React JS for front end
7. Redux for easy state management 
8. Stripe for handling payments. 
9. SendGrid for handling email activities like sending email, creating webhook
10. Localtunnel to create a webhook on local environment for testing purpose
11. Redux-form for easily handling forms in the front-end

   In order to test the app, 
   1. Sign in to https://blooming-ridge-82966.herokuapp.com using Google Account
   2. Every new user is provided with 3 initial credits. 
   3. In order to recharge, you may enter 4242 4242 4242 4242 as the fake credit card numnber, any CVV and any future date within 5 years
   4. Create and send surveys
   5. Respond to the survey using received email
   6. Check for the survey stats on the home dashboard at /surveys path 
   
   



