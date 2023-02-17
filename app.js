const { arch } = require('os');
const { options } = require('yargs');
const { crearArchivo } = require ('./helpers/multiplicar.js');     
const argv = require('./config/yargs');
const colors = require('colors');
    
console.clear();

// console.log(argv)
// console.log(process.argv)

// console.log('base yargs:',argv.base)


// const [,,arg = 'base=5'] = process.argv;
// const [,base = 5] = arg.split('=');


// console.log(base);

// const base = 3;

crearArchivo(argv.b, argv.l, argv.h)
    .then(arch => console.log(colors.random(arch),'creado'))
    .catch(err => console.log(err))