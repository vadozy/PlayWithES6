function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

async function addAsync(x) {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return x + a + b + c;
}

addAsync(42)
    .then(result => console.log(result)); // 162

function doubleAfter3Seconds(x) {
  return new Promise((resolve, reject) => {
    if (x > 25) {
      setTimeout(() => {
        reject(x);
      }, 3000);
    } else {
      setTimeout(() => {
        resolve(x * 2);
      }, 3000);
    }
  });
}

async function addAsync2(x) {
    const a = await doubleAfter3Seconds(10);
    const b = await doubleAfter3Seconds(20);
    const c = await doubleAfter3Seconds(30);
    return x + a + b + c;
}

addAsync2(42)
    .then(result => console.log(result))
    .catch(err => console.log(err)); // 30
