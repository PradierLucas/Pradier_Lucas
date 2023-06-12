// Crea una función que genere 100 números aleatorios entre 1 y 100 que no se repitan y luego
// imprima por pantalla usando document.write().

function azar() {

    var numeros = [];
    
    while (numeros.length < 100) {

        var num = Math.floor(Math.random() * 100) + 1;

        if (numeros.includes(num) == false) {

            numeros.push(num);
        }

    }

    for (var i = 0; i < numeros.length ; i++) {
        document.write((i + 1) + ") " + numeros[i] + "<br>");
    }
}

azar();

