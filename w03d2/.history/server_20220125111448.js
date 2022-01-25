const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 8085;

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
app.get('/', (req,res) => {
  const templateVars = {
    objectives: objectives
  };
  res.render('index', templateVars);
});

//
// READ
//
app.get('/read/:index', (req,res) => {
  console.log(`req.params`, req.params);
  const index = 0;
  const templateVars = {
    objectives: objectives
  };
  res.render('read', templateVars);
});

//
// EDIT
//

//
// ADD
//

//
// DELETE
//

app.listen(PORT, () => {
  console.log(`Server is listening on PORT=${PORT}`);
});
