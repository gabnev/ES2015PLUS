// SETS = store unique values of any type

const set1 = new Set();

// add values to set
set1.add(100);
set1.add('A String');
set1.add({name: 'John'});
set1.add(true);
set1.add(100);

const set2 = new Set([100, true, 'string', {name: 'String'}]);

console.log(set1);
console.log('');
console.log(set2);

// get count
console.log('');
console.log(set1.size);

// check for values
console.log('');

console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({name: 'John'}));

// objects are not primitive values - each object is allocated in a different bit of memory
console.log({name: 'John'} === {name: 'John'})

// delete from set
console.log('');
console.log(set1);
set1.delete(100);
console.log(set1);

//iterate sets
console.log('');
for(let item of set1) {
  console.log(item);
}

console.log('');
set1.forEach((item) => {
  console.log(item)
})

console.log('');
const valArr = Array.from(set1);
console.log(valArr);