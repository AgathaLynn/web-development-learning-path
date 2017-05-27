/*
  getWith, version 1
*/

const getWith = (attr) =>
  (obj) => obj[attr];

const pet = {
  species: 'cat',
  name: 'gremlin',
  color: 'black'
};

const getName = getWith('name');
console.log(getName(pet));

/*
  Question: do I need to worry about state?
  Can I come up with an example in which this version will fail?
*/

const dog = {
  name: 'Murphy',
  color: 'orange',
  getName: getWith('name')
};
const name = 'Irene';

console.log(getName(dog));

/*
  So... you probably can. But it's not obvious to me HOW you can...
*/
