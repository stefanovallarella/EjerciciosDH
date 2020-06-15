// OBJETOS y CONSTRUCTOR

const fs = require("fs");

// Una sola tarea 
let tarea = {

    titulo: "Practicar el Switch",
    descripcion: "Entender para qué sirve",
    estado: "pendiente"

}
//console.log(tarea.titulo);



// Más de 1 tarea 
let tareass = [ 
    {
        titulo: "Practicar el Switch",
        descripcion: "Entender para qué sirve",
        estado: "pendiente"
    },
    {
        titulo: "Practicar el For",
        descripcion: "Aplicarlo",
        estado: "en progreso"

    },
    {
        titulo: "Practicar el Json",
        descripcion: "Aplicarlo",
        estado: "hecho"

    }
];      // le puedo agregar una tarea con .push({ nueva tarea en forma de objeto })
// let arrayStr = JSON.stringify(tareass);
// console.log(arrayStr);




//Micro desafío
// 1. Recorrer el Array
// 2. De cada tarea mostrar el título(propiedad)

for(let i = 0; i < tareass.length; i++){

   // console.log(" - " + tareass[i].titulo + " - " + tareass[i].estado);
  //  console.log(" - Información: " + tareass[i].descripcion);
    // console.log(tareass[i].estado);
  //  console.log("     ");

}

// let tareaPos1 = tareass[0].titulo;
// console.log(tareaPos1);





// J S O N       Javascript Object Notation

let otraTarea = {

    "titulo": "Practicar el Json",                      //formato json
    "descripcion": "Aplicarlo",
    "estado": "hecho",
    "numero": 5

}

let unaTarea = {

    titulo: "Practicar el Json",                      //formato js
    descripcion: "Aplicarlo",
    estado: "hecho",
    numero: 5,
    leerTitulo() { console.log(this.titulo)}
}

let stringTarea = JSON.stringify(unaTarea);  //  (Lo que vamos a convertir, replacer, space)  (unaTarea, null, " ") para que quede más acomodado.
// console.log(stringTarea);   // No nos toma el método "leerTitulo" porque Json no lo soporta.






// Microdesafío
// Crear el archivo tareas.json
// Leer el archivo de tareas.json con el módulo fs.
// Parseamos el archivo de tareas.json
// Solo si la tarea está pendiente o en progreso

let tareasSheison = fs.readFileSync("./tareas.json");
let tareasJS = JSON.parse(tareasSheison);
// console.log(tareasJS);


// for(let d = 0 ; d < tareasJS.length; d++){

//     if(tareasJS[d].estado == "pendiente" || tareasJS[d].estado == "en progreso"){

//         console.log(" - " + tareasJS[d].titulo + " - " + tareasJS[d].descripcion + " - " + tareasJS[d].estado);

//     } 
// }




// Crear funcion listarTodas()  que liste todas las tareas
// Crear funcion listarNoTerminadas()

    function listarTodas(){

        for(let d = 0 ; d < tareasJS.length; d++){
                
          //  if(tareasJS[d].estado == "pendiente" || tareasJS[d].estado == "en progreso"){
        
                console.log(" - " + tareasJS[d].titulo + " - " + tareasJS[d].descripcion + " - " + tareasJS[d].estado);
        
            
        }     

    }

    function listarNoTerminadas(){

        for(let d = 0 ; d < tareasJS.length; d++){

            if(tareasJS[d].estado != "hecho"){
        
                console.log(" - " + tareasJS[d].titulo + " - " + tareasJS[d].descripcion + " - " + tareasJS[d].estado);
        
            } 
        }

    }

//    listarTodas();
//    console.log("                ");
//    listarNoTerminadas();


// listar funcion por estado, le pasamos un estado y lista solo las que tiene ese estado

function listaPorEstado(estadoPasado){

    for(let d = 0 ; d < tareasJS.length; d++){

        if(tareasJS[d].estado == estadoPasado){

            console.log(" - Actividad con estado " + estadoPasado + " :" + " - " + tareasJS[d].titulo + " " + " - " + tareasJS[d].descripcion + " " + " - " + tareasJS[d].estado);

        }

}
}

console.log(listaPorEstado("en progreso"));




// Constructor de TAREAS
function Tareas(titulo, descripcion, estado){

    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = estado;

}

let tarea1 = new Tareas("Partido de fútbol", "21 hs en la Plaza", "pendiente");

// console.log(tarea1);