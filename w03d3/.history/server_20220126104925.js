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


app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});