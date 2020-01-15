const lugar =  require('./lugar/lugar');
const clima =  require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudada para obtener el tiempo',
        demand: true       
    }
}).argv;

/*lugar.getLatLng(direccion)
    .then( resp => {
        clima.getClima(resp.lat, resp.lon)
            .then( resClima => resultado = `La temperatura en ${resp.direccion} es de ${resClima}ºC`);
}); */

const  getInfo = async ( direccion) => {

    try{
        const coordenadas = await lugar.getLatLng(direccion);

        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lon);

        return `La temperatura en ${coordenadas.direccion} es de ${temperatura}ºC`

    }catch(err){
        console.log(err);
        return `No se pudo determinar el clima de ${direccion}`;
    }

    

    return resultado

}

getInfo(argv.direccion)
       .then(console.log)
       .catch(console.log);



     


     







         
