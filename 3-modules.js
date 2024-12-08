//commonJS,every file is a module(by default)
//modules -encapsulated code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data =require('./6-alternative-flavor')
// console.log(data);
require('./7-the-kurds');

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);

