# Node Package Execute (NPX)
NPX is a package runner for Node.js that allows you to run command-line tools and packages directly from npm registry. With NPX, you can easily download, run and execute packages without the need to install them globally on your system.

## Usage

To run a package using NPX, simply type npx followed by the package name in your terminal.
For example, to run the create-react-app package, you would use the following command:
`npx create-react-app my-app`

## Options

NPX provides a few options to modify its behavior:
```css
-c, --command     Run a command from the local package bin
-e, --eval        Evaluate code
-h, --help        Output usage information
-n, --node-arg    Provide an option to the Node.js executable
-p, --package     Run a package
-r, --reference   Reference a local `.bin` file
-v, --version     Output version information
```

- `-c, --command`

This option allows you to run a command from the local package bin. For example, to run the eslint command from a locally installed package:

```perl
npx -c eslint my-file.js
```


- `-e, --eval`:  allows you to `evaluate code directly from the command-line`. For example::
  
- `-h, --help`:  displays the usage information for NPX. For example::
  
- `-n, --node-arg`: allows you to provide an option to the Node.js executable. For example:
  
- `-p, --package`:  allows you to run a package by specifying its name. For example:
  
- `-r, --reference`:  allows you to reference a local `.bin` file. For example:
  
- `-v, --version`:  displays the version information for NPX. For example:

# commands
## `React` 
| Command                           | Explanation                                                                                                  |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `npx create-react-app my-app`     | Creates a new React application in a directory called "my-app".                                              |
| `npx create-next-app my-app`      | Creates a new Next.js application in a directory called "my-app".                                            |
| `npx create-react-library my-lib` | Creates a new React component library in a directory called "my-lib", with an example app and documentation. |
---

## `Node.js` and `server`
| Command                                                 | Explanation                                                                                                                                                             |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npx nodemon index.js`                                  | Runs a Node.js script called "index.js" using the "nodemon" tool, which automatically restarts the server whenever you make changes to the code.                        |
| `npx http-server`                                       | Starts a static web server in the current directory, which serves files over HTTP.                                                                                      |
| `npx concurrently "npm run backend" "npm run frontend"` | Runs two NPM scripts concurrently, in separate processes. Useful for running a back-end and front-end server at the same time.                                          |
| `npx serve`                                             | Starts a static web server in the current directory, which serves files over HTTP with features such as directory listing and caching.                                  |
| `npx webpack`                                           | Bundles JavaScript files and other assets into a single file, optimized for performance and browser compatibility.                                                      |
| `npx babel-node script.js`                              | Runs a Node.js script called "script.js" using the Babel compiler, which allows you to use modern JavaScript features that may not be supported by the Node.js runtime. |
| `npx json-server --watch db.json`                       | Starts a RESTful API server based on a JSON file called "db.json", which can be used for prototyping and testing.                                                       |
| `npx browser-sync start --server --files "**/*"`        | Starts a live-reloading web server that watches all files in the current directory, including subdirectories.                                                           |
---


## Utils
| Command                  | Explanation                                                                                                                               |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `npx tldr git`           | Displays concise, practical examples of how to use various Git commands, using the "tldr" tool, which stands for "Too Long; Didn't Read". |
| `npx prettier --write .` | Runs the Prettier code formatter on your entire project directory, and automatically reformats any files to match the Prettier style.     |
---
## file system
| Command                      | Explanation                                                                         |
| ---------------------------- | ----------------------------------------------------------------------------------- |
| `npx cowsay "Hello, world!"` | Generates an ASCII art cow that says the given message, using the "cowsay" package. |
| `npx nodetouch file.txt`     | Creates an empty file called "file.txt", if it doesn't already exist.               |
---

## Tests 
| Command                                      | Explanation                                                                                                                                                       |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npx jest --watch`                           | Runs the Jest testing framework in watch mode, which re-runs the tests automatically whenever you make changes to the code.                                       |
| `npx eslint . --fix`                         | Runs the ESLint code linter on your entire project directory, and automatically fixes any errors it finds.                                                        |
| `npx mocha`                                  | Runs the Mocha testing framework, which supports asynchronous testing and various testing styles.                                                                 |
| `npx cypress open`                           | Opens the Cypress testing framework, which provides an interactive test runner and support for end-to-end testing.                                                |
| `npx react-codemod rename-unsafe-lifecycles` | Upgrades a React project to use safer lifecycle methods, which are recommended in React 17 and later.                                                             |
| `npx cypress open`                           | Opens the Cypress testing framework, which provides an interactive test runner and support for end-to-end testing.                                                |
| `npx lighthouse https://www.example.com`     | Runs the Lighthouse performance auditing tool on a website, and provides a report with suggestions for improving the site's performance, accessibility, and more. |
---

## Next.js
| Command                      | Explanation                                                       |
| ---------------------------- | ----------------------------------------------------------------- |
| `npx create-next-app my-app` | Creates a new Next.js application in a directory called "my-app". |
---

| unOrder                           | Explanation                                                                                                                              |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `npx create-react-library my-lib` | Creates a new React component library in a directory called "my-lib", with an example app and documentation.                             |
| `npx ng new my-app`               | Creates a new Angular application in a directory called "my-app".                                                                        |
| `npx create-nuxt-app my-app`      | Creates a new Nuxt.js application in a directory called "my-app".                                                                        |
| `npx create-svelte my-app`        | Creates a new Svelte application in a directory called "my-app".                                                                         |
| `npx dotenv config`               | Generates a .env file based on your current environment variables, which can be useful for managing sensitive information like API keys  |
| `npx dotenv config`               | Generates a .env file based on your current environment variables, which can be useful for managing sensitive information like API keys. |
| `npx np`                          | Publishes a new version of an NPM package, with automated prompts for version number and release notes.                                  |
| `npx nodetouch file.txt`          | Creates an empty file called "file.txt", if it doesn't already exist.                                                                    |
| `npx babel src --out-dir dist`    | Transpiles all files in the "src" directory using Babel, and outputs them to the "dist" directory.                                       |