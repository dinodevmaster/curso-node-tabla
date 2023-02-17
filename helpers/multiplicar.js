const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, list = false, to=10) => {

    // return new Promise((res, rej) => {
    //     console.log('-----------------------');
    //     console.log(`     Tabla del: `,base);
    //     console.log('-----------------------');
    
    //     let salida='';
    //     for(let n=1; n<=10; n++){
    //         salida += `${base} x ${n} = ${base * n}\n`;
    //     }
    //     // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //     //     if(err) throw err;
    //     //     console.log(`tabla-${base}.txt creado`);
    //     // })
    
    //     console.log(salida);
    //     fs.writeFileSync(`tabla-${base}.txt`, salida);
    //     res(`tabla-${base}.txt`);
    // })

    try {    
        let salida='', consola='';
        for(let n=1; n<=to; n++){
            salida += `${base} ${'x'.red} ${n} ${'='.red} ${base * n}\n`;
            consola += `${base} x ${n} = ${base * n}\n`;
        }
        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if(err) throw err;
        //     console.log(`tabla-${base}.txt creado`);
        // })
        if(list){
            console.log('-----------------------'.yellow);
            console.log(`     Tabla del: `.red, colors.cyan(base));
            console.log('-----------------------'.yellow);
            console.log(salida);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}