const argv = require ('yargs')
    .option(
        'b', {
            alias: 'base',
            type:'number',
            demandOption: true,
            describe:'Its a multiply table base'
    })
    .option(
        'l', {
            alias: 'list',
            type:'boolean',
            default: false,
            describe:'Show the multiply table on console'
        }
    )
    .option(
        'h', {
            alias: 'to',
            type:'number',
            demandOption: true,
            describe:'Limit the multiply table'
        }
    )
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;