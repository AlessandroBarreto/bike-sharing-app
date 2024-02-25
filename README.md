# 🚲 Code Challenge: Bike Sharing Data Map 🚲

In this code challenge, you’ll be building an App that consults an API to retrieve geolocated data to expose on a map.

## Demo:

Check out the live demo [here](https://bike-sharing-app.netlify.app/).

## Technologies:

- React
- TypeScript
- Leaflet
- Axios
- HTML
- CSS
- Jest
- React-testing-library

## Requirements:

1. Build a Web App using ReactJS.
2. Fetch your data from [http://api.citybik.es/v2/](http://api.citybik.es/v2/), an API for Bike Sharing Data.
3. Show that data on a map, with 3 different layers:
   - L1: Number of networks, per country;
   - L2: Number of stations, per network;
   - L3: Station details.
4. Allow the user to drill down, from L1 to L3, by clicking on markers.
5. Allow the user to go back to the previous layer.

## Structure

- bike-sharing-app/

  - public/
    - ...
  - src/
    - api/
      - ...
    - assets/
      - ...
    - components/
      - ComponentName/
        - index.tsx
        - styles.css
        - **tests**/
          - index.test.tsx
        - ...
      - ...
    - hooks/
      - ...
    - pages/
      - PageName/
        - index.tsx
        - styles.css
        - **tests**/
          - index.test.tsx
        - ...
      - ...
    - styles/
      - ...
    - utils/
      - ...
    - index.tsx

- **`public/`**: This directory contains the public assets of your application. These assets are accessible directly by the browser, such as `index.html`, images, and other static files.

- **`src/`**: This is the main directory where your application source code resides.

  - **`api/`**: Contains modules responsible for interacting with external APIs. Functions or classes here handle API requests and responses.

  - **`assets/`**: Contains static assets like images, fonts, or other files imported into your application.

  - **`components/`**: Contains reusable React components. Each component typically has its own directory with its TypeScript file (`index.tsx`), CSS file (`styles.css`), and a `__tests__` folder for unit tests.

  - **`hooks/`**: Contains custom React hooks for reusing stateful logic between components.

  - **`pages/`**: Contains React components representing different pages or routes of the application. Each page typically has its own directory with its TypeScript file, CSS file, and a `__tests__` folder for unit tests.

  - **`styles/`**: Contains global styles or styling utilities used throughout the application.

  - **`utils/`**: Contains utility functions or helper modules used throughout the application.

  - **`index.tsx`**: Entry point of the application, rendering the root component and mounting it into the DOM.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**Note:** If you encounter any issues, such as conflicts with other scripts or unexpected behavior, try running the application in incognito mode (private browsing). Some browser extensions or settings may interfere with the development environment.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
