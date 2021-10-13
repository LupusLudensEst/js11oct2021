const {nanoid} = require('nanoid')

console.log(nanoid(), nanoid().length, typeof nanoid());

const faker = require('faker');
const randomName = faker.name.findName();
console.log(randomName, randomName.length, typeof randomName);