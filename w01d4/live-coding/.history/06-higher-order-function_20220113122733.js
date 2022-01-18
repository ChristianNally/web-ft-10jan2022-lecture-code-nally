const animalNoises = ['Oink','Moo','Meow','Bark'];

animalNoises.forEach( (item) => {
  console.log(`Monkey does not say ${item}`);
} );


const ourForEach = (arr, callback) => {

  for (let i = 0; i < arr.length; i++){
    callback( arr[i] );
  }

};


