const axios = require('axios');


//Funcion para traer los datos del servicio 

const getInfo = async (id) => {
    const  codigo = id;
  
     const response = await axios.get( `https://rickandmortyapi.com/api/character/${codigo}`);
  

    const info = response.data;
    
    //Obejeto con las variables con los datos del personaje para imprimir en consola
        const datos = {
            id: info.id,
            nombrePersonaje: info.name,
            status: info.status,
            especie: info.species,
            genero: info.gender,
            creado: info.created

        }
        console.log(datos);
 
}

module.exports = {
    getInfo
}



