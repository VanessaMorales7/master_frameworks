

const consumirAPI = async (url) => {

    try{
        const respuesta = await fetch(url); 
        const resultado = await respuesta.json();
        console.log(resultado);
    }catch(error){
        console.error(error);
    }


}

const esPar = (numero) => new Promise((resolve, reject) => {
    
    if(numero%2==0){
        resolve("Es par")
    }
    else
    {
        reject("No es par")
    }

}); 

esPar(4).then(resultado => console.log(resultado))
.catch(err => console.error(err))


const esPar2 = async (numero) => {

    try{
        if(numero%2==0){
            console.log("Es par")
        }else{
            throw new Error("No es par")
        }
    }catch(err){
        console.error(err);
    }

}



