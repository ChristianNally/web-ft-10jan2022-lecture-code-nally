const http = require("http");
const fs = require("fs");
const path = require("path");
const todos = require("./db/todos");

console.log("todos", todos);

const port = 3001;

const server = http.createServer((req, res) => {
  console.log(`createServer callback request event listener was called.`);
  // console.log(`req`,req);
  // console.log(`method`,req.method);
  // console.log(`path`,req.url);

  const route = `${req.method} ${req.url}`;
  console.log(`route`, route);

  // Respond to a Request for a particular Route
  switch (route) {
    case "GET /":
      filePath = path.join(__dirname,'views','index.html');
      console.log('retrieving view from:' + filePath);
      fs.readFile(filePath, 'utf8', (err, fileContent) => {
        if (err) {
          res.statusCode = 500; // 500 means fatal error
          res.write(err.message);
          res.end();
        } else {
          res.statusCode = 200; 
          res.write(fileContent);
          res.end();
        }
      });
      break;
    case "GET /todos":
      console.log(`handling the GET /todos route`);
      const todoList = JSON.stringify(todos);

      res.statusCode = 200;
      res.write(todoList);
      res.end();

      break;
    default:
      //
      res.statusCode = 404;
      res.write(`NOT FOUND`);
      res.end();
      break;
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
