//Modules - Encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utlis')
const data = require('./6-alternate-flavour')
require('./7-mind-granade')
console.log(data);
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)