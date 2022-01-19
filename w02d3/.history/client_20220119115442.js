const net = require('net');
const port = 18898;

const connectionConfig = {
  host: '8.tcp.ngrok.io',
  port: port
};

// CLIENT

const client = net.createConnection(connectionConfig);
client.setEncoding('utf8');

client.on('connect', function(){
  console.log(`i have connected to the server.`);
});

client.on('data', function(message){
  console.log(`server sent:`,message);
});

client.on('end', function(){
  console.log(`client disconnected from server`);
});

// STDIN
process.stdin.on('data', function(message){
  client.write(message);  
});
