'use strict'

class Coche {
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocida(){
        this.velocidad += 1;
    }

    disminuirVelocidad(){
        this.velocidad -= 1;
    }
}

class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo,velocidad,antiguedad);
        this.altura = 5;
    }

    mostrarAltura(){
        return "la altura es " + this.altura;
    }
}

var coche1 = new Coche('BMW',270,2017);
var coche2 = new Coche('Audi',100 ,2018);
var coche3 = new Coche('Mercedes',200,2017);
var coche4 = new Coche('Renault',200,2017);

var Autobus1 = new Autobus('Pegasus',200,2017);
console.log(Autobus1.mostrarAltura);

