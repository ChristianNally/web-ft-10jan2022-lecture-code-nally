const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8081;

const app = express();
app.set('view engine','ejs');

//
// DATA
//
const users = {
  'nally': 'qwerty'
};

// middleware


// routes
app.get('/', (req,res) => {
  res.write('home');
  res.end();
});

//
// LOGIN
//
app.get('/login', (req,res) => {
  res.render('login');
  res.end();
});

app.post('/login', (req,res) => {

});

//
// REGISTER
//
app.get('/register', (req,res) => {
  res.render('register');
  res.end();
});

//
// PROFILE
//
app.get('/profile', (req,res) => {
  res.write('home');
  res.end();
});

app.get('*', (req,res) => {
  res.render('404');
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});