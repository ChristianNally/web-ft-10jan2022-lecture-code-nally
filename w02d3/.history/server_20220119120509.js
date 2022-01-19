const net = require('net');
const port = 8009;

const server = net.createServer();

const connectedClients = [];

const broadcast = (msg, sender) => {
  connectedClients.forEach((client) => {
    if (client !== sender){
      client.write(msg);
    }
  });
};

server.on('connection', function(client){

  connectedClients.push(client);
//  console.log('client',client);
  console.log('client._eventsCount',client._eventsCount);
  
  client.setEncoding('utf8');

  console.log('Client is connected.');
  client.write(`Welcome to my awesome server! ⛵`);

  client.on('data', function(message){
    console.log('Message received from client:',message);
    if (message.startsWith('setName ')){
      const clientName = message.replace(/setName /, '');
      client.name = clientName;
    }
    broadcast(message, client);
  });

});

server.listen(port, function(){
  console.log(`Server is listening on port ${port}`);
});
