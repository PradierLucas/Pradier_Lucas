// A partir del siguiente array que se proporciona:
// var valores = [true, false, 2, "hola", "mundo", 3, "char"];
// 1. Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras.
// 2. Imprimir estos elementos de menor a mayor cantidad de letras.
// 3. Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta,
// multiplicación y división) realizadas con los dos elementos numéricos

var valores = [true, false, 2, "hola", "mundo", 3, "char"];
var texto = []
var numeros = []


// 1. Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras.

let mayor="";

for(let valor of valores){

    if( typeof(valor)== "string" ){

      texto.push(valor);

        if(valor.length > mayor.length){

            mayor=valor;
        } 
    }
  
}

document.write(`La palabra mas larga es ${mayor}`+ "<br>")

// 2. Imprimir estos elementos de menor a mayor cantidad de letras.

var ordenado = texto.sort(function(A, B) {
    return A.length - B.length;
    
  });

  document.write(texto)


  // 3. Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta,
// multiplicación y división) realizadas con los dos elementos numéricos

  for(let valor of valores){

    if( typeof(valor)== "number" ){

      numeros.push(valor);}
    
    }

let suma = numeros[0] + numeros[1] 
let resta = numeros[0] - numeros[1]
let multiplicacion = numeros[0] * numeros[1]
let division = numeros[0] / numeros[1]

document.write("<br>" + `Suma: ${suma} , Resta: ${resta} , Multiplicacion: ${multiplicacion} , Division: ${division}`)





