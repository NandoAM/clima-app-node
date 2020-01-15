const axios = require ('axios');

const apiKey = '7b1a8a49204cd73f25b4a70211137d96';

const getClima = async (lat, lon) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`)

    return resp.data.main.temp;

}


module.exports= {getClima}