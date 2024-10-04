
# Capstone Project: Travel App

The project include a simple form where you enter a location and also select departure and return dates. This info is passed on to the api to get image data from pixabay, weather forcast from weatherbit and location coordinates from geonames. Additionally, it helps to display the 

## Project goal

This project aims to gives the opportunity to put all of the skills learned into one project to build a custom travel app. Due to the nature of the course, it is very JavaScript heavy, but it is still expected to create clean and appealing HTML/CSS. It includes targeting the DOM, working with objects, and retrieving data from 3 APIs in which one of those is reliant on another to work. Finally, this is all going to be done in a Webpack environment, using an express server, and wrapped up with service workers.

## Run project
Below shows how to run in development and production mode.

## Setting up the Project

Fork the project Github repo, and then clone or download the zip file locally. Once you have the project locally, navigate to the project directory to install all dependencies.

```
$ git clone https://github.com/areejsalah/travel-app-final-project-
$ cd travel-app
$ npm install
```

## Signup for API keys 🔑

This project uses the following APIs:

* [Geonames](https://www.geonames.org/export/web-services.html)
* [Weatherbit](https://www.weatherbit.io/account/create)
* [Pixabay](https://pixabay.com/api/docs/)

When you sign up, you'll be able to get your personal API keys for Weatherbit and Pixabay. For Geonames you'll just need to get your username once your account is activated.

At the root of the project, create a new file named .env. Inside the file, add the following lines, replacing the stars with your personal API keys and the Geonames username.

```
GEOCODES_NAME=**************************
WEATHERBIT_KEY=**************************
PIXABAY_KEY=**************************
```


Then, start the local server:

```
$ npm run build-prod
$ npm start
```
The app will be running in your browser on localhost:8082

## Runnning the development mode
After completing the steps above, open a second terminal and start the webpack dev server:

```
$ npm run build-dev
```
The development version of the app will be running in your browser on localhost:8080
(the page will automatically update in the browser after any code change)

## Testing Unit

This project has a Testing Unit to check if the main functions are working correctly. Testing is done with Jest.

To run tests you can use the following NPM command:

```
$ npm run test
```

The test results will be displayed on the terminal.

## Screenshots
![11](https://github.com/user-attachments/assets/6f82bb31-6fcd-4a43-91cd-e6e103e78658)


![222](https://github.com/user-attachments/assets/94c75359-758c-4293-ad3e-992b77afa7af)
3e)



