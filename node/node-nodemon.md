# nodemon
utility tool for Node.js applications that automatically restarts the application when changes are made to the codebase.
## Installation
You can install nodemon globally using the following command:
```bash
npm install -g nodemon
```
Or you can install it locally as a development dependency:

```bash
npm install --save-dev nodemon
```
## Usage
```bash
nodemon app.js
nodemon --ignore "./data" server.js
```

```bash
nodemon --ignore "./data" server.js
```

You can also pass arguments to nodemon to customize its behavior. For example, you can specify which file to monitor using the -w or --watch option:
```bash
nodemon -w server server.js
```

## Configuration
`Nodemon` can be configured using a configuration file named `nodemon.json` or by using command-line options.

Here is an example nodemon.json file:
```json
{
  "watch": ["server"],
  "ext": "js,json",
  "ignore": ["node_modules"]
}

```