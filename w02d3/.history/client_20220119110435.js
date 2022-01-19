const net = require('net');
const port = 8009;

const server = net.createServer();

server.on('connection', function(client){

  console.log('Client is connected.');

});

server.listen(port, function(){
  console.log(`Server is listening on port ${port}`);
});
