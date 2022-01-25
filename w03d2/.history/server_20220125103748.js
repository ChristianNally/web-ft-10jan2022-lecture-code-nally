const express = require('express');

const app = express();

app.set('view engine', 'ejs');

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
