# Seed

## A starter project for you

A production-ready React foundation for building scalable, testable frontend applications. It includes many popular libraries and features:

- Vite 8.0.3
- React 19.2.4
- CSS Modules
- Dark Mode
- `@` aliasing
- TypeScript 5.9.3
- React Router 7
- Tanstack Query 5
- Axios
- React-Icons
- Vitest
- React Testing Library
- userEvent
- MSW
- factory-js

## Prerequisites

- Node 22.13+

## Installation

To install, run the following commands in the directory the project resides:

``` 
    npm i 
    echo VITE_API_BASE_URL=https://jsonplaceholder.typicode.com >> .env
    echo VITE_API_PROJECT_NAME="Seed Project" >> .env
```

Now you are ready to develop your idea.

## Scripts

```npm run dev # run the project in an development server
npm run build # make a production build
npm run lint # run eslint for linting
npm run preview # serve a production build locally
npm run test # run the tests
npm run test:coverage # run the tests with a console and html coverage report
```

## Project Structure

- /src: 

    Note: all files and directories can be accessed with `@`

    - components/: Contains all UI components. Component that are in directories include the component (`index.tsx`), a test file (`*.test.tsx`), and a CSS Module file (`*.module.css`); components that are not in directories are `*.tsx`
    - httpService/: Contains an Axios client and a file to access `todos` endpoints for use by Tanstack Query.
    - layouts/: Holds all of the layouts for the project. Contains only one file: `BaseLayout.tsx`
    - pages/: All of the pages needed to get started. Out of the box, the pages are:
        - TodoPage
        - TodosPage
        - AboutPage
        - NotFound
    - queries/: Holds all of the Tanstack Queries for the project, exported as hooks. Has two hooks:
        - useTodo
        - useTodos
    - types/: contains all of the types for the project. The files are:
        - index.ts: Component prop types are held here.
        - tanstack.ts: types used to make Tanstack Query work. They are the individual data expected from the API.
        - theme.ts: types needed for the dark mode functionality.
    - App.test.tsx: Tests for the `App` component. File tests for routes and subpages in individual pages.
    - index.css: All of the styles that are found throughout the project. The values here are for rems, color palette variables for light and dark mode, and for all `a` tags.
    - App.tsx: Contains all the routes and pages in the project.
    - main.tsx: The entry point for the project. It wraps the `App` component with `BrowserRouter` and Tanstack Queries `QueryClientProvider` to allow for easier testing of pages and components.
    - settings.ts: stores all of the custom settings for the project, of which there are two to start:
        - BASE_URL: The base url of the accessed API.
        - PROJECT_NAME: The name that appears in the navbar brand.
    **Note:** Values are sourced from a `.env` file in the project root and must be prefixed `VITE_API_` (e.g. `VITE_API_BASE_URL`).
- tests/:
    - __mocks__: files for various mocks. Currently holds two files:
        - handlers.ts: MSW handlers
        - server.ts: MSW server
    - factories.ts: Mock data factory file.
    - helpers.tsx: functions that assist with testing. Contains one component: `LocationDisplay`. This component displays the current location of the app, and must be wrapped in a `MemoryRouter`.
    - setup.ts: sets up the testing. It clears local storage, resets MSW server, cleans up RTL mounted components, and extends all of the RTL matchers.
    - wrappers.tsx: Wraps the component or hook with `QueryClientProvider` and `MemoryRouter`. It also include the `LocationDisplay` component.
