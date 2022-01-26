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
  '1': {id: '1', email: 'nally@example.com', password: 'qwerty'}
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

function verifyUserByEmail(email, password){
  for (let id in users){
    if (users[id].email === email && users[id].password === password){
      return users[id];
    }
  }
  return false;
}

app.post('/login', (req,res) => {
  const candidateEmail = req.body.email;
  const candidatePassword = req.body.password;

  const userObj = verifyUserByEmail(candidateEmail, candidatePassword);

  if (userObj) {
    console.log('login valid');
    res.cookie('user',userObj.id);
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
  const cookieUser = req.cookies.user;

  if (users[cookieUser]){
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
// LOGOUT
//
app.get('/logout', (req,res) => {

  res.clearCookie('user');

  res.redirect('/');
  res.end();
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