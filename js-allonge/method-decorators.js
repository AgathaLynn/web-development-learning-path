// let's try a maybe decorator to fix the adding problem
const maybe = fn =>
  function(x) {
    return x !== undefined ? fn.call(this, x) : x;
  };

// original "broken" object
const students = {
  names: ['Alfred', 'Beatrice', 'Claudia'],
  add: maybe(function add(name) {
    return this.names.push(name);
  }),
  del: function del(name) {
    return this.names.includes(name) ?
      this.names.splice(this.names.indexOf(name), 1)
      : undefined;
  }
};

console.log(students.names);
console.log(students.add('Dorian'));
console.log(students.add()); // we're adding 'undefined'! (fixed by maybe)
console.log(students.add('Elian'));
console.log(students.names);
console.log(students.del('Beatrice'));
console.log(students.del('Florence'));
console.log(students.names);
