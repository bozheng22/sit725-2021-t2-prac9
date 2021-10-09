This is my simple application for leaning javascript and node.js. It uses Materialize CSS for the UI interface, Socket IO for real time communications as well.

After cloning the repo from the Github, install all the packages by running
  `npm install`

Packages are dropped into the folder: 
  node_modules 
`npm install` will install the required modules. The node modules will not be uploaded.

Run the the server by using
  npm run

Once the serveris running, test it by acccessing the following URL:
  http://localhost:3000

files in the repository
`server.js`
The server written with node.js. It is litsening on port 3000.

`.gitignore`
list of file patterns that should not be stored in git

`LICENSE`
The open source license for this project.

`package.json`
Standard package.json file for node packages. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.



# SIT725-2021-T2-PRAC7
Package the website to docker
add Dockerfile and .dockerignore

# SIT725-2021-T2-PRAC6
Mocha is a popular JavaScript testing framework that runs on Node.js and in the browser. It simplifies asynchronous testing. It generates accurate test reports as well as stack traces for any uncaught exceptions.
Chai, on the other hand, is an assertion library that can be used in conjunction with any JavaScript testing framework.

npm install mocha --save
npm install chai --save
add "test": "mocha --report spec" into package.json
Add the a simple test script - test.js

# SIT725-2021-T2-PRAC5

import the GIT repo from PRAC4
Trying to create the MVC model base on PRAC4, but failed.
Pretty much use the Dr. Bonti's repo - https://github.com/alexbonti/deakin-crowds
make changes on modal structure in index.html

# SIT725-2021-T2-PRAC4

Follow Navit's ppt to create REST API
npm install mongodb --save
make a connection to mongodb
add card's array to database

# SIT725-2021-T2-PRAC3

Create a new GIT repo - PRAC3
npm init
npm install express --save
npm install bady-parser
create server.js, server listening on port 3000

- app.use(express.static(\_\_dirname+'/public')) # use the static page under public folder
- app.use(express.json()) a method inbuilt in express to recognize the incoming Request Object as a JSON Object
  Add some basic HTML code to index.html
  add cards from a constant array objects
