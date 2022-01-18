

const runMyFunction = function(callback){
  callback('Monkey Fuzz!');
};


runMyFunction( function(string){ console.log(string); return string; } );

runMyFunction( (string) => { console.log(string); return string; } );

runMyFunction( string => console.log(string) );