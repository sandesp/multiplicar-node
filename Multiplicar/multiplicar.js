const fs = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = (base, limite = 10) => {
    console.log('==============='.green);
    console.log(`tabla del ${base}`.green);
    console.log('==============='.green);

    for (let i = 1; i <= limite; i++) {

        console.log((`${base} * ${i} = ${ i * base}`));
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base digitada ${base} No es un numero`)
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${ i * base}\n`);
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(` tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla

}