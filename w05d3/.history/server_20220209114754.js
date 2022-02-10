const express = require('express');
const pg = require('pg');
const PORT = 7889;
const app = express();

app.set('view engine', 'ejs');

//
// SET UP
//

const configObj = {
  user: 'postgres',
  host: 'localhost',
  database: 'spot',
  password: 'postgres',
  port: 5433
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

app.get('', (req,res) => {
  
  res.render('home');
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT=${PORT}`);
});