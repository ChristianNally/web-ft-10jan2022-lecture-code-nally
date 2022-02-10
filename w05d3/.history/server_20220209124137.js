require('dotenv').config();
const express = require('express');
const pg = require('pg');
const PORT = 7889;
const app = express();

app.set('view engine', 'ejs');

//
// SET UP
//

const Client = pg.Client;

const configObj = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
};

const client = new Client(configObj);
console.log('db connection info:', configObj);

client.connect()
.then(() => {
  console.log('db connected');
})
.catch((error) => {
  console.log('db connection error:',error);
});

//
// MIDDLEWARE
//

//
// ROUTES
//

// BROWSE

app.get('/', (req,res) => {
  client.query('SELECT * FROM objectives ORDER BY id;')
    .then((response) => {
      const templateVars = {
        rows: response.rows
      };
      res.render('home',templateVars);
    })
    .catch((error) => {
      console.log('db browse error:',error);
    });
});

// app.post('/objectives/add', (req,res) => {
//   const question = req.body.question;
//   const answer = req.body.answer;
// });

// READ
app.get('/objectives/:id', (req,res) => {
  const id = req.params.id;
  client.query('SELECT * FROM objectives WHERE id = $1;',[id])
    .then((response) => {
      const templateVars = {
        id: response.rows[0].id,
        type: response.rows[0].type,
        question: response.rows[0].question,
        answer: response.rows[0].answer,
      };
      res.render('objectives',templateVars);
    })
    .catch((error) => {
      console.log('db read error:',error);
    });
});

// EDIT

// ADD
app.get('/objectives/add', (req,res) => {
  res.render('add');
});

// DELETE
app.get('/objectives/:id/delete', (req,res) => {

  const id = req.params.id;
  client.query('DELETE FROM objectives WHERE id = $1;',[id])
    .then((response) => {
      res.redirect('/');
    })
    .catch((error) => {
      console.log('db delete error:',error);
    });
});


app.listen(PORT, () => {
  console.log(`Server is listening on PORT=${PORT}`);
});