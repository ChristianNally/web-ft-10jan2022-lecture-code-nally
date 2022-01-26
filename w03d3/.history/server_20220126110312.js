const express = require('express');
const PORT = 8081;

const app = express();
app.set('view engine','ejs');


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