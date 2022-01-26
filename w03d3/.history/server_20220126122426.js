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
  '1': {id: '1', email: 'nally@example.com', password: 'qwerty'},
  '2': {id: '2', email: 'apple@example.com', password: 'apple'}
};

// middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

const generateRandomString = (len) => {
	let outputStr = "";
	for (let i = 0; i < len; i++) {
		let rndm = Math.floor(Math.random() * 62);
		if (rndm <= 9) {
			outputStr += String.fromCharCode(rndm + 48);
		} else if (rndm >= 36) {
			outputStr += String.fromCharCode(rndm + 61);
		} else {
			outputStr += String.fromCharCode(rndm + 55);
		}
	}

	return outputStr;
};

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

function verifyUser(email, password){
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

  const userObj = verifyUser(candidateEmail, candidatePassword);

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

  console.log('register valid');
  const newId = generateRandomString(4);
  users[newId] = {id: newId, email: newEmail, password: newPassword};
  console.log('users',users);
  res.redirect('/login');
});

//
// PROFILE
//
app.get('/profile', (req,res) => {
  console.log('req.cookies',req.cookies);
  const userID = req.cookies.user;

  if (users[userID]){
    const templateVars = {
      secret: users[userID].password
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