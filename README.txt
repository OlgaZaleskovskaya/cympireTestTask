Home task for Cympire company, created by Olga Zaleskovskaya.

Project developed in Angular 8 with  SCSS.
 Use "ng add @angular/material" for installing Angular Material styling.
Project contains temporary back-end part developed using NodeJS v.14.0.0, Nodemon and Express.
 This back-end part used for developer’s purpose to avoid CORS restriction.
To run project clone repository into local folder.
Use Angular 8 or late version.

Install Express and Nodemon using commands:
npm install --save express
npm install --save-dev nodemon

In order to use nodemon add the "start:server": "nodemon server.js" to the package.json file:
   "scripts": {
    //...,
    "start:server": "nodemon server.js"
  },

Pay attention that NodeJS uses port 3000 for server.

Start back-end part by command:
npm run start:server

Start Angular project by command:
ng serve

Check the result on localhost:4200
