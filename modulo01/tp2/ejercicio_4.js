// Escribir el código de una función a la que se pasa como parámetro un número entero y
// devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por
// pantalla el resultado devuelto por la función.
// Por ejemplo si ingresara un dos el resultado debe ser par y si ingresara un 5 el resultado
// debe ser impar

let num = prompt("Ingrese un numero");

par_impar(num);


function par_impar (num){


    if((num % 2) == 0){
    document.write("El numero es par")}
    else {
        document.write("El numero es impar")
    }
}
