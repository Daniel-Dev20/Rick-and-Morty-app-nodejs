
const personaje = require('./services/services');

//variable con las opciones de comandos para ingresar en la consola
const argv = require('yargs').options({
    id:{
        alias: 'i',
        demand: true,
        descripcion: 'App para obtener información de los personajes de Rick and Morty'
    }
}).argv;

//Funcion desde el servicio para recibir el id e imprimir los datos 
personaje.getInfo(argv.id).then(console.log()).catch(err =>  console.log('No se encontre el personaje', err));






