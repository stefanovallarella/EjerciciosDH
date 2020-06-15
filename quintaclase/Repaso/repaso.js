// Tipos de Datos

let unArray = ["tipos de datos","funciones","ciclos", "metodos de arrays", "destructuración" ];

let otroArray = [123, 23413, 21, -23, 5];

// Funcion - Declaración vs Ejecución

function log (data) {
console.log(data);
}

function logTitle (data) {

    log(" ");
    log(data);
    //console.log(data.length);
    log("-".repeat(data.length));
}

logTitle("Funciones");

//Función Nombrada
function elDoble(num) {

    return num * 2;

}   

let resultado = elDoble(123);
console.log(resultado);

//Función anónima

let elTriple = function (num){

        return num * 3;

}

log(resultado);

// no podría declarar de nuevo let = resultado --> Porque el LET no te deja. Si podría resultado = elTriple(333)




// Arrow Functions || Son anónimas por naturaleza. No las puedo nombrar--> No se les escribe el function
// => Fat Arrow 

let elCuadruple = (num) => { return num * 4}

let cuadruple = elCuadruple(5);

log(cuadruple);

        // si hay un único parámetro, los paréntesis () no son necesarios. Si no tengo más de una línea de código el return no es necesario ponerlo
        // Ej :  let elCuadruple = (num) =>  num * 4

// CALLBACKS

logTitle("Callbacks");

    let sumar = (n1,n2) => n1 + n2;
    let resta = (n1,n2) => n1 - n2;
    let dividir = (n1,n2) => n1 / n2;
    let multiplicar = (n1,n2) => n1 * n2;

    console.log(sumar(2,3));

                    //callback
    let calculadora = (operacion, n1, n2) => operacion(n1,n2);

    console.log(calculadora(sumar,5,10));
    console.log(calculadora(resta,20,10));

    // Metodos de Arrays
    logTitle("Metodos de arrays");


    // MAP
    // Devuelve un nuevo array con elementos modificados 
    // Recorre cada el elemento del array original aplicándole la funcion establecida y retorna un array modificado, no modifica el array original
    
    /* let unArrayMayus = unArray.map(

        function(elemento){

            return elemento.toUpperCase;
        }
    ); */

    let unArrayEnMayus = unArray.map(unElemento => unElemento.toUpperCase());   
    console.log(unArrayEnMayus);

        // FILTER
        // Devuelve un array con los elementos que cumplen con la condición del callback

        let unArrayFiltrado = unArray.filter(
            elementoArray => elementoArray.length > 10

        );

        console.log(unArrayFiltrado);

        //Sin arrow function

        let unArrayFiltra2 = unArray.filter(
            
            function (unElemento){

                return unElemento > 10;

            }
        )

        
        // REDUCE
        // Reduce el array a un único valor.
        // Acumulador, elemento, valor inicial        // reduce(callbackFN(acumulador, elemento), initialValue)
        // El reduce toma mi funcion y la ejecuta por cada elemento del array.
        let iniciales = unArray.reduce(

            function (acumulador, unElemento){
                return acumulador += unElemento[0];                // acumulador += unElemento;    --> es lo mismo que acumulador = acumulador + unElemento
             }, " "

        )
        console.log(iniciales);

        //Otra forma

        let callback = function (acumulador, unElemento){

            return acumulador += unElemento[0];
        }

        let iniciales2 = unArray.reduce(callback, " ");     // reduce(callbackFN(acumulador, elemento), initialValue)

        // 
        let sumaDeArray = otroArray.reduce(
            
            (acum, elem) => acum += elem, 0
                
                );  

        console.log(sumaDeArray);


        // FOR EACH

        let forich = unArray.forEach(

            function(elemento){

                console.log(elemento);

            }
        );

        console.log(forich);

         //

        unArray.forEach (

                elem => console.log(elem.toUpperCase())

        );



        // For of    ( solo arrays, NO objetos) No usa CALLBACKS
            logTitle("  ");
            logTitle("FOR OF");

        for (let elemento of unArray){

            console.log(elemento.toUpperCase());

        }

        // For IN (recorre OBJETOS) No usa CALLBACKS
        logTitle("  ");
        logTitle("FOR IN");

        let objeto = {
            nombre: "pepito",
            edad: 45,
            ciudad: "Rosario"
        }

            //  console.log(dato, objeto[dato]);    DAN LO MISMO
            // console.log(objeto.nombre);          DAN LO MISMO

            // dentro del for in no se puede usar el Objeto.propiedad porque propiedad es una VARIABLE(string) y no un método
        for(let dato in objeto){

              console.log("Nombre de la propiedad:", dato);   // me da el NOMBRE de la propiedad, no puedo acceder al valor   
              console.log("Valor de la propiedad", objeto[dato]);             // objeto[dato] --> ACCEDO al valor de la propiedad

        }


        // Destructuración

        //De arryas

        // De objetos 

        // Spread Operator
        //
