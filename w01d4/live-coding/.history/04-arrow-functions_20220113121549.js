

const runMyFunction = function(callback){
  callback('Monkey Fuzz!');
};


runMyFunction( (string) => { console.log(string); return string; } );

