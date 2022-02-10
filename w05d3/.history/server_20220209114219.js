const express = require('express');
const PORT = 7889;
const app = express();

app.set('view engine', 'ejs');


app.listen(PORT, () => {
  console.log(`Server is listening on PORT=${PORT}`);
});