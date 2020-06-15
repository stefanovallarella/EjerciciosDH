console.log("--------Accediendo a app.js--------");
console.log(); 

// npm install chalk     
// const chalk = require ("chalk");
//console.log(chalk.red("no encontré esa tarea"));



const tareasModulo = require("./tareas");
const tareas = require("./tareas.json");

const chalk = require("chalk");



/* const fs = require("fs");

//funcion que lea los archivos Json, para leer tareas

function leerArchivoJson(){

    const tareasJson = fs.readFileSync("./tareas.json", "utf-8");   // (archivo, decodificacion);
    return JSON.parse(tareasJson);

}

//Microdesafio
//1. Crear la funcion escribirArchivoJSON()
// - La funciona va a recibir un Array
// - Van a convertir el array a JSON
// - Usando fs.writeFileSync van a escribir el archivo JSON

function escribirArchivoJSON(tareas){

    let tareasConvertido = JSON.stringify(tareas);
    let retornar = fs.writeFileSync("./tareas.json", tareasConvertido);
    return retornar;

}

let tareas = leerArchivoJson(); 
 */


/* const tareasJson = fs.readFileSync("./tareas.json", "utf-8");   // (archivo, decodificacion)
let tareas = JSON.parse(tareasJson); */



/*  tareas.forEach(element => {
    
    console.log(element.titulo);

});  
 */

  // process.argv  -->  An array containing the command line arguments.
 //                     The first element will be 'node', the second element will be the name of the JavaScript file
 //                     The next elements will be any additional command line arguments.
// ----------------------------------------------
//EXAMPLE
// process.argv[0] == '/usr/local/bin/node'
// process.argv[1] == '/Users/maerics/src/js/sum-process-argv.js'
// process.argv[2] == '1'
// process.argv[3] == '2'
// process.argv[4] == '3'


/* let parametros = process.argv;
console.log(parametros.slice(3));  */ 

//Se le pasa el parámetro por consola --> node app.js todas  || node app.js pendiente
// Process da toda la data --> .argv tiene los parámetros que le paso por consola. node app.js TODAS PENDIENTES ,etc
                                                                                                 // Los espacios separan parametros todas(espacio)pendientes
let accion = process.argv[2];
let parametros = process.argv.slice(3);    // recorto para que sea más cómodo

switch(accion){
    case undefined:
    case "todas":
        tareasModulo.leer();
        break;
    case "pendiente":
        tareasModulo.pendientes();
        break;
    case "en progreso":
        tareasModulo.enprogreso();
        break;
    case "hecho":
        tareasModulo.hecho();
        break;    
    case "crear":
        tareasModulo.crear(parametros[0], parametros[1], parametros[2]);
        break;
    case "completar":
        tareasModulo.completar(parametros[0], parametros[1], parametros[2]);
        break;
    case "borrar":
        tareasModulo.borrar(parametros[0]);
        break;
    case "listar":
        tareasModulo.listar(parametros[0]);
        break;    
    case "detalle":
        tareasModulo.detalle(parametros[0]);
        break;
    default:
        console.log();
        console.log("No entiendo esa acción");    
} 



