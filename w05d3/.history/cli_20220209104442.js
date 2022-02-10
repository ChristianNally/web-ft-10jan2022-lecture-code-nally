const pg = require('pg');
const Client = pg.Client;

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

