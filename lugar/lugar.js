const axios = require('axios');


//console.log(encodeURL);
const getLugarLatLong = async(direccion) => {
    const encodeURL = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeURL}`,
        headers: { 'x-rapidapi-key': '1416a36b14mshe79c53ba52fa061p194dcdjsnca6852898b02' }
    });

    const resp = await instance.get();
    //console.log(resp);

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }
    //console.log(resp.data.coord);
    const dir = resp.data.name;
    const lon = resp.data.coord.lon;
    const lat = resp.data.coord.lat;




    /*  instance.get()
         .then(resp => {
             console.log(resp.data.main);
         })
         .catch(err => {
             console.log('ERROR!!!', err);
         }); */
    return {

        dir,
        lon,
        lat
    }
}

module.exports = {
    getLugarLatLong
}