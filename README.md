 # Foodie Phonetics
An app to learn how to say your favorite foods in your new favorite language!

### The Problem
How do you ask for chicken in France? Eggs in Spain? Cake in Germany? With Foodie Phonetics, the user will be able translate a variety of foods into a new language. The MVP is a fully working English to French version of the app.

### The Solution
Using a spaced repetition algorithm, Foodie Phonetics teaches the user how to say the most common food items in their language of choice. Each time the user gets a question correct, that question is moved farther back in a simulated singly linked list. If the user gets a question incorrect, it will be moved to the top of the list. This way, the user can practice what they don't know more frequently that what they do know.

#### Technologies ####

The front-end was developed with React, Redux, Redux Form
Styling was done with CSS

The back-end was developed with NodeJS, MongoDB, Mongoose, and Express.

Testing was done with Mocha, Chai, and Jest

For production, Heroku and Netlify were used.

#### Visual Representation of Full Stack Technologies Used
![Alt text](https://github.com/thinkful-ei18/RenewU/blob/master/resources.png?raw=true "Visual representation of technologies used to create Foodie Phonetics")

#### The App
The production-ready version of the application is at: https://upbeat-wright-74e6b5.netlify.com

#### Login Page
![Alt text](https://github.com/thinkful-ei18/RenewU/blob/master/LoginPage.png?raw=true "RenewU Login Page")

#### Landing Page
![Alt text](https://github.com/thinkful-ei18/RenewU/blob/master/landingpage.png?raw=true "RenewU Landing Page")

#### Watch Page
![Alt text](https://github.com/thinkful-ei18/RenewU/blob/master/watchpage.png?raw=true "RenewU Watch Page")

#### Meditate Page
![Alt text](https://github.com/thinkful-ei18/RenewU/blob/master/listenpage.png?raw=true "RenewU Meditate Page")

#### Data Persistence ####
Creating an app that used persistent data without the user actually entering in information proved to be a unique challenge. One of the main features of the app is to explore meditation through six currated videos. Once the user completes a video, they receive a "badge" and can then move on to the next video or chose to exit the "Watch" portion of the app. Using React, Redux, MongoDB and Mongoose, a userSchema was created with a UserWatchID defaulted to "0" (all users who are either new or have not yet watched a video start at 0). Once a video is watched, the UserWatchID is changed to the video index (videos are stored in the backend as an array). So, when a user returns to the video page they will automatically start on the video they left on.

This feature was built with the following logic


#### The Action And Async API Call
![Alt text](https://github.com/thinkful-ei18/RenewU/blob/c478affdae3e4f9b2d8e825fa2c64c05d4421fe5/UserWatchIDAction.png?raw=true "UserWatchID Logic Redux Action")

#### The Reducer
![Alt text](https://github.com/thinkful-ei18/RenewU/blob/master/UserWatchIDReducer.png?raw=true "UserWatchID Logic Redux Reducer")

#### The Component
![Alt text](https://github.com/thinkful-ei18/RenewU/blob/master/Screenshot%20from%202018-03-22%2021-54-35.png?raw=true "UserWatchID Logic React Component")

#### The Back-End Router
![Alt text](https://github.com/thinkful-ei18/RenewU/blob/master/BackendUserWatchID.png?raw=true "UserWatchID Logic Back-End")

#### The Back-End Mongoose User Schema
![Alt text](https://github.com/thinkful-ei18/RenewU/blob/master/MongooseSchema.png?raw=true "UserWatchID Logic Back-End Mongoose User Schema")
