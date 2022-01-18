

function product(a,b){
  return a * b;
}

console.log('product(2,3)',product(2,3));



const runDatabaseQuery = function(action){ action('Elise'); };

const sayHello = function(name){ console.log(`Hello, `,name); };

runDatabaseQuery(sayHello);
