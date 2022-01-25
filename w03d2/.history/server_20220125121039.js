const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const app = express();
const PORT = 8085;

app.set('view engine', 'ejs');

//
// MIDDLEWARE
//
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));

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
app.get('/read/:iii', (req,res) => {
  const index = req.params['iii'];
  const templateVars = {
    objective: objectives[index]
  };
  res.render('read', templateVars);
});

//
// EDIT
//
app.get('/edit/:iii', (req,res) => {
  const index = req.params['iii'];
  const templateVars = {
    objective: objectives[index]
  };
  res.render('edit', templateVars);
});

app.get('/edit/:iii', (req,res) => {
  res.render('edit', {
    objective: objectives[req.params['iii']]
  });
});



app.post('/edit', (req,res) => {
  console.log(`req.body`,req.body);

  // objectives.push({
  //   question: req.body.question,
  //   answer: req.body.answer
  // });

  res.redirect('/');
});

//
// ADD
//
app.get('/add', (req,res) => {
  res.render('add');
});

app.post('/add', (req,res) => {
  console.log(`req.body`,req.body);

  objectives.push({
    question: req.body.question,
    answer: req.body.answer
  });

  res.redirect('/');
});

//
// DELETE
//

app.listen(PORT, () => {
  console.log(`Server is listening on PORT=${PORT}`);
});
