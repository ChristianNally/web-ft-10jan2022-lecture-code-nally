// callback;
//   a function that gets passed to another function
//   to be invoked by that second function


// // higher order function (HOF)
// // a function that accepts another function as an argument












const runMe = function(monkeyfuzz) {
  // console.log(monkeyfuzz.toString());
  let gimme = monkeyfuzz('Elise'); // executing the callback
};


























// const sayHello = function(name) {
//   console.log(`hello there ${name}`);
// };

const sayHello2 = function(name) {
  console.log("sayHello2 logs:",`hola!! ${name}`);
};


// const addTwo = function(num) {
//   console.log(num + 2);
// };

runMe(sayHello2);






// runMe(addTwo);
