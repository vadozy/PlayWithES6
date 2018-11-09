function* createIterator() {
    console.log(`1:`);
    let first = yield 1;
    console.log(`2: ${first}`);
    let second = yield first + 2; // 4 + 2
    console.log(`3: ${second}`);
    let third = yield second + 3; // 5 + 3
    console.log(`4: ${third}`);
    return 42;
}
let iterator = createIterator();
console.log(iterator.next());  // "{ value: 1, done: false }"
console.log(iterator.next(4)); // "{ value: 6, done: false }"
console.log(iterator.next(5)); // "{ value: 8, done: false }"
console.log(iterator.next(6));  // "{ value: 42, done: true }"
console.log(iterator.next(6));  // "{ value: undefined, done: true }"
console.log(iterator.next(6));  // "{ value: undefined, done: true }"
