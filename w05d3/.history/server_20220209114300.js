const express = require('express');
const PORT = 7889;
const app = express();

app.set('view engine', 'ejs');

app.get('', (req,res) => {
  res.render('home');
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT=${PORT}`);
});