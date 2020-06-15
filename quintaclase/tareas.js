const fs = require("fs");
const chalk = require("chalk");
//funcion que lea los archivos Json, para leer tareas

function leerArchivoJson(){

    const tareasJson = fs.readFileSync("./tareas.json", "utf-8");   // (archivo, decodificacion);
    return JSON.parse(tareasJson);

}

//Microdesafio
//1. Crear la funcion escribirArchivoJSON()
// - La funcion va a recibir un Array
// - Van a convertir el array a JSON
// - Usando fs.writeFileSync va a escribir el archivo JSON

function escribirArchivoJSON(tareas){

    let tareasConvertido = JSON.stringify(tareas);
    let retornar = fs.writeFileSync("./tareas.json", tareasConvertido);
    return retornar;

}

// Funcion Nombrar TODAS ( titulo )

function todas(){
    let tareas = leerArchivoJson();
    tareas.forEach(element => {
        console.log(element.titulo);
    });

}

// Mostrar solo las que tienen estado: pendiente
function pendientes(){
    let tareas = leerArchivoJson();
    let tareasFiltradas = tareas.filter(elementos => elementos.estado == "pendiente");
    tareasFiltradas.forEach(element => {
        console.log(element.titulo + " -- " + element.descripcion + " (" + element.estado + ")");
    });
}

// Mostrar solo las que tienen estado: en progreso
function enProgreso(){
    let tareas = leerArchivoJson();
    let tareasFiltradasProgre = tareas.filter(element => element.estado == "en progreso");
    tareasFiltradasProgre.forEach(element => {
        console.log(element.titulo + " -- " + element.descripcion + "(" + element.estado + ")");
    });
}
// Mostrar solo las que tienen estado: hecho
function hecho(){
    let tareas = leerArchivoJson();
    let tareasFiltradasHecho = tareas.filter(element => element.estado == "hecho");
    tareasFiltradasHecho.forEach(element=>{
        console.log(element.titulo + " -- " + element.descripcion + "(" + element.estado + ")");
    });
}

     // Microdesafio
        // 1. Atajar el caso de "crear"
        // 2. Hacer el console.log() de el titulo y de la descripción
        // 3. Crear un objeto literal a partir de lo que envia el usuario 
        // { titulo:
         //  descripcion:            
        //   estado:
         //      }

function crear(titulo = " ", descripcion = "Sin descripción", estado = "pendiente"){    // si no paso el titulo, se va a crear en el objeto con titulo vacio
    
    if(titulo.length > 5){
        let tareas = leerArchivoJson();
        let tareaNueva = {
            titulo: titulo,
            descripcion: descripcion,
            estado: estado,
    
        }
            tareas.push(tareaNueva);
            escribirArchivoJSON(tareas); 
    
            console.log("Tarea creada con exito")
    }else{
        console.log("Debes ingresar un titulo mayor a 5 caracteres");
    }
}

  // Micro Desafio
        //1. Atajar el caso de "completar" 
        //2. Vamos a recorrer el array de tareas
        //-usar map()
        //-usar un if()
        //3. Vamos a modificar la tarea quie corresponda
        //4. vamos a guardar los cambios

function completar(titulo, descripcion, estado){
    let tareas = leerArchivoJson();
    let tareasCompletar = tareas.map(function(element){

        if(element.titulo === titulo && titulo != undefined){
         let tareaModificada = {
                                titulo: element.titulo,
                                descripcion: descripcion,
                                estado: estado
                                 }   
        console.log(" - Tarea Modificada! - ");
         return tareaModificada;
      /*    console.log("Tarea completada exitosamente");
         console.log(element.titulo," - ", element.descripcion," - ", element.estado);  */  
        } else {
            let mismaTarea = { 
                            titulo: element.titulo,
                            descripcion: element.descripcion,
                            estado: element.estado
                            }
            return mismaTarea;
        }
    });
        // console.log(tareasCompletar);
    escribirArchivoJSON(tareasCompletar);
}

        //Micro desafio
        //1. Crear funcion listar
        // - Toma como parametro ( opcional ) el estado(pendientes, terminadas, etc)   node app.js listar pendientes  || listar en progreso
        // - Si llega el estado lista solo las de ese estado
        //- Si no llega el estado--> lista todas

        function listar(estado){
           switch(estado){
            case "pendiente":
                pendientes();
                break;
            case "en progreso":
                enProgreso();
                break;
            case "hecho":
                hecho();
                break;
            default:
                todas();
                break;
           }
        }



        // Micro Desafio
        //1. Atajar el caso de "borrar" y le pasamos el titulo
        //2. Vamos a recorrer el array de tareas
        //-usar filter()
        //3. Vamos a filtrar la tarea quie corresponda
        //4. vamos a guardar los cambios

        function borrar(titulo){
            let tareas = leerArchivoJson();
            let tareasFiltradasBorrar = tareas.filter(function(element){

                return element.titulo != parametros[0];
    
            });
        
            if(tareas.length != tareasFiltradasBorrar.length){
                escribirArchivoJSON(tareasFiltradasBorrar);
                console.log(chalk.green("tarea borrada exitosamente"));
                
            }else {
                console.log(chalk.red("No encontré esa tarea"));   
            }
        }



            // Crear método detalle
            //1. La función detalle toma un título por parámetro
            //2. Busca la tarea por título (investiguen el método find() ;-))
            //3. Si la encuenta muestra título, descripción y estado
            //4. Si no la encuentra avisa al usuario

        function detalle (titulo){
            let tareas = leerArchivoJson();
           /*  let tareaBuscada = tareas.find(function(element){

                if(element.titulo == titulo){

                    return console.log(" - ", element.titulo, " - ", element.descripcion, "(", element.estado, ")");

                }
            }) */

            let tareaBuscada = tareas.find(function(element){

                return element.titulo == titulo;

                }
            )

            if(tareaBuscada != undefined){

                console.log(" - ", tareaBuscada.titulo, " - ", tareaBuscada.descripcion, "(", tareaBuscada.estado, ")");

            } else{

                console.log(chalk.red("No se encontró la tarea especificada"));
            }
        }


module.exports = {
    
    leer: todas,   // es lo mismo que poner todas     ( Nombre propiedad es lo mismo que la funcion de la variable --> todas: todas)
    pendientes,    // pendientes: pendientes
    crear,         // crear: crear
    borrar,        // borrar: borrar
    enProgreso,    // enProgreso: enProgreso
    hecho,         // hecho: hecho
    completar,     // completar: completar
    listar,        // listar: listar
    detalle
}