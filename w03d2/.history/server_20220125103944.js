const express = require('express');
const morgan = require('morgan');
const app = express();

app.set('view engine', 'ejs');

//
// MIDDLEWARE
//

app.use(morgan("dev"));

//
// DATA
//

const objectives = [
  {question: "Why EJS Templates?", answer: "We use templates to separate business logic from the presentation layer."},
  {question: "How do we implement EJS Templates?", answer: "npm i ejs, mkdir views, app.set('view engine', 'ejs');"},
  {question: "What does CRUD stand for?", answer: "Create, Read, Update, Delete"},
  {question: "Where are URL parameters stored?", answer: "req.params"},
  {question: "Where are <form> values stored?", answer: "req.body"}
];

//
// ROUTES
//

//
// BROWSE
//

//
// READ
//

//
// EDIT
//

//
// ADD
//

//
// DELETE
//
