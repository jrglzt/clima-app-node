const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require("yargs").options({
    direccion: {
        alias: 'd',
        desc: 'dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion
//lugar.getLugarLatLong(argv.direccion)
//   .then(console.log);

/* clima.getClima(51.5085, -0.1257)
    .then(console.log)
    .catch(console.log); */

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLong(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima de ${coords.dir} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;

    }

    //propio
    /*const resp = await lugar.getLugarLatLong(direccion);
    if (resp.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }
    const resp2 = await clima.getClima(resp.lat, resp.lon);
    return {
        mensaje: `La temperatura para ${direccion} es ${resp2}`
    }*/




    //salida 
    //El clima de tal lugar es 4534 temperatura

    //No se pudo determinar el clima de tal lugar

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);