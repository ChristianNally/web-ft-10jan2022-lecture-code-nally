function processor(arg1, callback) {

  // do some stuff
  // 1.
  // 2.
  console.log('arg1',arg1);
  callback('monkey fuzz!');

}



processor(1, function(string){console.log('my string is ' + string)});

