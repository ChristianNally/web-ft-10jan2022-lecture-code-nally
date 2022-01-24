const express = require('express');
const PORT = 3002;
const todos = require('./db/todos');

const app = express();
app.set('view engine','ejs');

// ROUTE = GET /
app.get('/', (req, res) => {
  res.render('index'); // looks into the views directory by default
  res.end();
});

// ROUTE = GET /todos
app.get('/todos', (req, res) => {

  const templateVars = {
    foobar: todos
  };

  res.render('todoList', templateVars);
  res.end();
});

app.get('*', (req, res) => {
  res.status(404).write('404 NOT FOUND');
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

