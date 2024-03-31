# BlogFeed

BlogFeed is a minimalist blog feed application built with React and Redux, utilizing Redux Thunk middleware for asynchronous actions. It provides a simple interface for users to view posts fetched from a JSONPlaceholder API along with the associated user information.

## Features

- Fetches posts and users data from JSONPlaceholder API.
- Displays a list of posts with their titles, bodies, and respective user names.
- Utilizes Redux for state management.
- Implements Redux Thunk middleware for handling asynchronous actions.

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/blogfeed.git
   ```

2. Navigate to the project directory:

   ```bash
   cd blogfeed
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

## Dependencies

The key dependencies used in this project are:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) - Middleware for Redux that allows you to write action creators that return a function instead of an action.
- [Axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js.
- [Lodash](https://lodash.com/) - A modern JavaScript utility library delivering modularity, performance, and extras.
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - A fake online REST API for testing and prototyping.

## Folder Structure

The project follows a standard React application structure:

- `src/` - Contains the source code.
  - `components/` - React components.
  - `reducers/` - Redux reducers.
  - `actions/` - Redux action creators.
  - `apis/` - API configuration and utilities.
- `public/` - Contains static assets and the HTML file.
- `package.json` - Configuration file for npm.

## Usage

Upon running the application, you'll see a list of posts fetched from the JSONPlaceholder API. Each post includes its title, body, and the name of the user who authored it.

---

## Screenshots

![blogfeed](https://i.imgur.com/MKkmHuE.png)

![blogfeed](https://i.imgur.com/XWhAw2b.png)

![blogfeed](https://i.imgur.com/8xkcfDi.png)
