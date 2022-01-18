
let age = 50;

const sayHello = function(string){
  const output = `hello there ${string}`;
  console.log(`output`, output);
  return output;
}

const putTheReturnValueInHere = sayHello(' to my little friend');

const myOtherVariable = sayHello;

myOtherVariable.something = 'something else';

console.log("myOtherVariable",myOtherVariable);


const addTWo = function(number){
  console.log('sum:',number + 2);
  return number + 2;
}
 

const myFunctions = [sayHello, addTwo];

for (jj = 0; jj < myFunctions.length; jj++){
  myFunctions[jj](jj);
}