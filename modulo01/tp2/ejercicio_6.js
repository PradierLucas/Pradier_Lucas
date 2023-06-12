// Escribir un script que muestre la posición de la primera vocal de un texto introducido por
// teclado. Por ejemplo: perro = “e” es la letra Nº2 ; árbol = “a” es la letra Nº1.

let palabra = prompt("Ingrese una palabra");


for (let i = 0; i <= palabra.length; i++) {
    if (palabra[i] === "a" || palabra[i] === "A") {
        document.write(`La primera vocal es la: a y se encuentra en la letra N°${i + 1}`);
        break;
    }
    else if (palabra[i] === "e" || palabra[i] === "E") {
        document.write(`La primera vocal es la: e y se encuentra en la letra N°${i + 1}`)
        break;
    }
    else if (palabra[i] === "i" || palabra[i] === "I") {
        document.write(`La primera vocal es la: i y se encuentra en la letra N°${i + 1}`)
        break;
    }
    else if (palabra[i] === "o" || palabra[i] === "O") {
        document.write(`La primera vocal es la: o y se encuentra en la letra N°${i + 1}`)
        break;
    }
    else if (palabra[i] === "u" || palabra[i] === "U") {
        document.write(`La primera vocal es la: u y se encuentra en la letra N°${i + 1}`)
    }

}




