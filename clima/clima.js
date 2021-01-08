const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1205ddb99dcf8454b3bd67f88828d8c1&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}