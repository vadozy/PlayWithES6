const promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then...
  const succeeded = true;
  throw new Error('Thrown in executor...');

  if (succeeded) {
    resolve("Stuff worked1!");
    //resolve(Error("Stuff worked!!"));
  }
  else {
    reject("It broke1");
    //reject(new Error("It broke"));
  }
});

const promise2 = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then...
  const succeeded = false;
  
  if (succeeded) {
    resolve("Stuff worked2!");
    //resolve(Error("Stuff worked!!"));
  }
  else {
    reject("It broke2");
    //throw new Error('Thrown...');
    //reject(Error("It broke"));
  }
});

promise
  .then(function(result) {
    console.log(result);
    //return(42);
    return promise2 ;
  }, function(err) {
    console.log(`${err}`);
    return promise2 ;
  })
  .then(function(result) {
    console.log(result);
    console.log(44);
  }, function(err) {
    console.log(err);
    throw (45);
  })
  .catch(function(err){
    console.log("in catch: ", err);
    //throw 46;
    return 46 ;
  })
  .then(result => {
    console.log(`Final then result: ${result}`);
    return promise;
  }, err => {
    console.log(`Final then err: ${err}`);
  })
  .catch(err => console.log(`Final catch ${err}`))

console.log('--- --- ---');

"The End";
