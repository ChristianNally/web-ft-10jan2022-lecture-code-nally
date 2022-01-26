const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 8081;

const app = express();
app.set('view engine','ejs');

//
// DATA
//
const users = {
  'nally@example.com': 'qwerty'
};

// middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

// routes
app.get('/', (req,res) => {
  res.render('home');
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
  const candidateEmail = req.body.email;
  const candidatePassword = req.body.password;

  if (users[candidateEmail] === candidatePassword) {
    console.log('login valid');
    res.cookie('user',candidateEmail);
    res.redirect('/profile');
  } else {
    console.log('login INVALID!');
    res.redirect('/login');
  }
});

//
// REGISTER
//
app.get('/register', (req,res) => {
  res.render('register');
  res.end();
});

app.post('/register', (req,res) => {
  const newEmail = req.body.email;
  const newPassword = req.body.password;

  if (users[newEmail]) {
    console.log('registration INVALID');
    res.redirect('/register');
  } else {
    console.log('login valid');
    users[newEmail] = newPassword;
    console.log('users',users);
    res.redirect('/login');
  }
});

//
// PROFILE
//
app.get('/profile', (req,res) => {
  console.log('req.cookies',req.cookies);

  if (req.cookies.user){
    const templateVars = {
      secret: 'this is super secret information. CWN loves to eat cookies for breakfast!'
    };
    res.render('profile',templateVars);
    res.end();
  } else {
    res.redirect('/login');
  }

});

//
// 404 page
//
app.get('*', (req,res) => {
  res.render('404');
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});