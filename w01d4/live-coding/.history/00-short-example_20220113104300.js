

const number = 5.5;

const text = "Monkey Fuzz!";

const funct = function(parameter){ process.stdout.write(parameter * 2) };





// you can see from the following function definition that it 'wants' a string passed in 
// as a parameter
function helloWorld(something){
  console.log(`Hello, World: ${something}`);
}


function doActionForTimes(action){
  for (let ii = 0; ii < 4; ii++){
    action(ii);
  }
}

