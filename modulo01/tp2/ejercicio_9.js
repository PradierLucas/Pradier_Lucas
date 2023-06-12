// Crear un programa que recibe las notas de un alumno, todos los números deben ser naturales
// < 11. Debe calcular el promedio. Por último imprimir en pantalla si el valor de media es < 5
// “Reprobado”, entre 6 y 8 “Aprobado” y si es mayor a 8 “Sobresaliente”

var cant = prompt("Cantidad de notas a cargar")

var suma = 0;

for(var i=0 ; i < cant;){


    var nota = prompt("Ingrese nota "+ (i+1));

    if (nota>=1 && nota<=10){
       
        suma = parseInt(suma) + parseInt(nota);

        i++
    }

}


var prom = (suma / cant);



if (prom < 5){
    document.write("Promedio: " + prom + " Reprobado");
}else if(prom>=6 && prom <= 8){
    document.write("Promedio: " + prom + " Aprobado");
}else if(prom>8){
    document.write("Promedio: " + prom + " Sobresaliente");}


