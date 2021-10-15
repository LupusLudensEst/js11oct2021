// const {nanoid} = require('nanoid')
//
// console.log(nanoid(), nanoid().length, typeof nanoid());
//
// const faker = require('faker');
// const randomName = faker.name.findName();
// console.log(randomName, randomName.length, typeof randomName);

const {get} = require('lodash'); // extracts feature from the object and if it does not exist
// it returns default meaning
const base = {name: 'Peter', age: 50};
console.log(base.name);
console.log(base.age);
console.log(get(base, 'age.adult', 99));