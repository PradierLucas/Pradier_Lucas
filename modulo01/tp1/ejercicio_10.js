// Declarar un array llamado “meses” y que tenga guardado los
// meses del año. Luego el usuario debe poder ingresar en el navegador un número de 1 al 12 y este
// le devolverá el nombre del mes. Por ejemplo escribe 5 debe devolver el mes mayo.

meses=["enero", "febrero", "marzo", "abril","mayo", 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];


num=prompt("Ingrese un numero del 1 al 12");

document.write(meses[(num-1)]);
