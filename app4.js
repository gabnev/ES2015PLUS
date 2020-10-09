// let a, b;

// [a, b] = [100, 200];
//REST pattern
// [a, b, ...c] = [100, 200, 300, 400, 500];

// ({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500});

// ({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});

// array destructuring
// const people = ['John', 'Jill', 'Joe'];

// const [person1, person2, person3] = people;

// parse array returned from function

// function getPeople() {
//   return ['John', 'Jill', 'Joe'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// object destructuring
const person = {
  name: 'John',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: () => {
    console.log('Hello');
  }
}

//old es5
// const name = person.name,
//       age = person.age;

// es 6
const { name, age, city, sayHello } = person;

console.log(name, age, city);

sayHello();