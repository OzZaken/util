[MERN](https://github.com/amazingandyyy/mern)
is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs

## clone or download
```powershell
$ git clone https://github.com/amazingandyyy/mern.git
$ yarn # or npm i
```

## project structure
```md
LICENSE
package.json
server/
   package.json
   .env (to create .env, check [prepare your secret session])
client/
   package.json
...
```


## Usage (run fullstack app on your machine)
```powershell
$ git clone https://github.com/amazingandyyy/mern.git
$ yarn # or npm i
```

## Client-side usage(PORT: 3000)
```powershell
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm run dev        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 8000)
Prepare your secret
run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

```powershell
// in the root level
$ cd server
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> src/.env
```

## Start
```bash
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm run dev // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```

## Deploy Server to [Heroku](https://dashboard.heroku.com/login)

```cs
$ npm i -g heroku
$ heroku login
...
$ heroku create
$ npm run heroku:add <your-super-amazing-heroku-app>
// remember to run this command in the root level, not the server level, so if you follow the documentation along, you may need to do `cd ..`
$ pwd
/Users/<your-name>/mern
$ npm run deploy:heroku
```

## After creating heroku
if using webpack: remember to update the file of [client/webpack.prod.js](https://github.com/amazingandyyy/mern/blob/main/client/webpack.prod.js)

```cs
 REACT_APP_API_URI=https://your-super-amazing-heroku-app.herokuapp.com
 ```