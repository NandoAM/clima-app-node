const axios = require('axios');


const getLatLng= async ( direccionP ) => {
    
    const encodedUrl = encodeURI (direccionP)
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,        
        headers: {'x-rapidapi-key': '2232d5fc83mshfe7be01c28c9543p18f11djsnec8067ccc1c1'},   
    });
    
    const resp =  await instance.get();

    if(resp.data.Results.length=== 0){
        throw new Error (`No hay resultados para ${direccionP}`);
    }

    const data = resp.data.Results[0];

    let direccion = data.name;
    let lat = data.lat;
    let lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }

}

module.exports =  { getLatLng }
