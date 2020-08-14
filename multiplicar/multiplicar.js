//require propio de node.
const fs = require('fs');
var colors = require('colors');
//require de expansiones no de node.
// const fs = require('express');
//require propios, lo hicimos nosotros.
// const fs = require('./fs');

let listarTabla = (base, limite = 10) => {

    console.log(`==============`.green);
    console.log(`===tabla de ${base}=`.green);
    console.log(`==============`.green);
    for (let i = 1; i <= limite; i++) {
        // \n = salto de linea
        console.log(`${base} * ${i} = ${base * i}`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            // \n = salto de linea
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}-al-${limite}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}