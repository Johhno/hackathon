# React Job Offer Character App

This is a simple React application that fetches job offer data and displays a character based on the experience requirements.

## File structure

src/
    components/
        Character.js: Component for rendering the character.
        Metadata.js: Component for displaying job offer metadata.
    controllers/
        Api.js: Handles API requests.
        bodyController.js: Controls character body parts.
    assets/: Contains character images.
    App.js: Main application component.
    index.js: Entry point for rendering the app.

## Components

### Metadata

    Displays job offer details, including job title, experience required, date of creation, and department.

### Character

    Displays a character based on the color determined by the experience level.
    Components include eyes, nose, mouth, arms, legs, and body.



## Getting Started

To run the application locally, follow these steps:

## Prerequisites

- Node.js and npm installed on your machine.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

