
//suma normal
function sumar(num1, num2){

    return num1 + num2;

}
// resta normal
function restar(num1, num2){

    return num1 - num2;

}

// Multiplicacion con condicion 
function multiplicar(num1, num2){

    if(num1 == 0 || num2 == 0){
   
        return "multiplicacion por 0";

    }else{

        return num1 * num2;

}
}

// console.log(sumar(2,3));

// console.log('division', division(10,2));


// console.log(multiplicar(5,0));
// console.log(multiplicar(5,5));

// Division con condicion 
function division(num1, num2){

    if(num2 == 0){

        console.log("El divisor es 0");

    } else {

    return num1 / num2;

    }
}

// Asignar funcion a vaariable y utilizarla 
let dividir = function (num1,num2){

if (num2 ===0){

    return "No se puede dividir por 0";

} else {

    return num1/num2;
}
}

//console.log(dividir(10,2));


//Le asigno una función a la variable "funcion"
let funcion = sumar;
            //console.log(funcion);


//ME traigo la funcion del modulo sumar.js

let moduloSuma = require("./sumar");
            //console.log(moduloSuma(2,3));

// Me traigo todos los modulos de las funciones

const sumaModulo = require("./sumar");
const restaModulo = require("./resta");
const multiModulo = require("./multiplicar");
const diviModulo = require("./division");
const multiploModulo = require ("./esMultiplo");


console.log(multiploModulo(6,2));
console.log(diviModulo(6,2));





