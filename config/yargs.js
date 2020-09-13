let opcs = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opcs)
    .command('crear', 'Crea tablas de multiplicar de acuerdo a la base y el limite dado', opcs)
    .help()
    .argv;

module.exports = {
    argv
}