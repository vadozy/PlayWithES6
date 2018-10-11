function* createIterator() {
    console.log(1);
    let first = yield 1;
    console.log(2);
    let second = yield first + 2; // 4 + 2
    console.log(3);
    yield second + 3; // 5 + 3
    console.log(4);
}
let iterator = createIterator();
console.log(iterator.next());  // "{ value: 1, done: false }"
console.log(iterator.next(4)); // "{ value: 6, done: false }"
console.log(iterator.next(5)); // "{ value: 8, done: false }"
console.log(iterator.next());  // "{ value: undefined, done: true }"
