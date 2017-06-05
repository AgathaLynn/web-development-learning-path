// function to turn objects and arrays into "blue" functions
const funckify = (functionLike) =>
  (arg) => functionLike[arg];
