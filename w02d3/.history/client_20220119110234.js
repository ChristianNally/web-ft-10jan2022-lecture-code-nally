const net = require('net');
const port = 8009;

const server = net.createServer();

server.on('connection', );

server.listen(port, function(){
  console.log(`Server is listening on port ${port}`);
});
