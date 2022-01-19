const net = require('net');
const port = 8009;

const connectionConfig = {
  host: 'localhost',
  port: port
};

const client = net.createConnection(connectionConfig);

