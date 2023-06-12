// Escribir una función que reciba un texto y lo devuelva al revés.

function reversa(palabra) {

    var palabra_reversa = palabra.split("").reverse().join("");

    document.write("La palabra al reves es : " + palabra_reversa)
}

let palabra = prompt("Ingrese una palabra")


reversa(palabra)

//La funcion split("") convierte el string en un array, la funcion reverse() pone al reves los elementos del array y la funcion join("") vuelve a unir los elementos de un array en un string. 