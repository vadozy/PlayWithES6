"use strict";

const p = new Promise((resolve, reject) => {
    console.log('Executor in');
    //resolve("payload");
    setTimeout(() => resolve("payload"), 1000);
    setTimeout(() => reject("ERR..."), 500);
    console.log('Executor out');
  });
  
  console.log('After "new Promise(...)"');
  
  p
    .then(data => {
      console.log(`Data1 01: ${data}`);
      return 42;
      //throw 42;
      //return Promise.reject(42);
      //return Promise.resolve(42);
      //return p;
  
      /*
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve("payload2"), 2000);
      });
      */
  
    }, err => {
      console.log(`Error1 01: ${err}`);
      //return 'ERRRR1';
      return Promise.resolve(42);
    })
    .then(data => console.log(`Data1 02: ${data}`), err => console.log(`Error1 02: ${err}`));
  
    p
    .then(data => {
      console.log(`Data2 01: ${data}`);
      //return 42;
      throw 42;
      //return Promise.reject(42);
      //return Promise.resolve(42);
      //return p;
  
      /*
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve("payload2"), 2000);
      });
      */
  
    }, err => {
      console.log(`Error2 01: ${err}`);
      return 'ERRRR2';
    })
    .then(data => console.log(`Data2 02: ${data}`), err => console.log(`Error2 02: ${err}`));
