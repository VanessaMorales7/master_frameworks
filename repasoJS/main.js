'use strict'

var nombre = "Pedro";
var altura = 180; 
var concatenacion = nombre + " " + altura;


var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1> Soy una caja </h1>
    <h2> Mi nombre es ${nombre} </h2>
    <h3> Mi estatura es ${altura} cm </h3>
`;

if(altura >= 190){
    datos.innerHTML += "<p>Eres una persona alta</p>";
}
else{
    datos.innerHTML += "<p>Eres una persona bajita";
}

for(var i = 0; i <= 40; i++)
{
    datos.innerHTML += "Estamos en el año "+ i + "<br>";
}


function MuestraMiNombre(){
       var misDatos = `
        <h1> Soy la caja de datos </h1>
        <h2> Mi nombre es ${nombre} </h2>
        <h3> Mi altura es ${altura} </h3>
    `;

    return misDatos;
}

function imprimir(nombre, altura){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre();
}
imprimir("Angie", 155);

var nombres = ['Jesús', 'Jorge', 'Juanito'];

/*
for(var i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}
*/
nombres.forEach(function(nombre){
    document.write(nombre + "<br>");
    console.log(nombre);
});

var coches = {
    modelo: "Mercedes Clase A",
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad);
    }
};
coches.mostrarDatos();

var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "buenos días";
        // saludo = false;    -----> Retorna el catch 
        if (saludo){
            resolve(saludo);
        }
        else{
            reject("No hay saludo disponible");
        }
    }, 2000);
});

saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
});



/*
const MuestraMiNombre2 = () => {
    var miDato = `
        <h1> Mi nombre es ${nombre}</h1>
    `;
    return miDato;
}

const imprimir2 = (nombre, altura) =>{
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre2();
}

imprimir2();

const Nombres = () => {
    console.log("a");
    console.log("a");   
    debugger
    console.log("a");
    console.log("a");
    console.log("a");
    console.log("a");
    console.log("a");
    console.log("a");
}

var numeros = [1,2,3,4,5];

const Sumar = (num) => {
    for(var i = 0; i < num.length; i++){
        debugger;
        console.log(num[i] + 5);
    }
}
*/

