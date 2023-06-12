// Escribir un programa que reciba el número del mes y devuelva si tiene 31, 30 o menos días.
// Por ejemplo: si ingreso el mes 12 el resultado debe decir tiene 31 días.

const meses = [31,28,31,30,31,30,31,31,30,31,30,31];

var mes = prompt("Ingrese el numero del mes");

if(mes>=1 && mes<=12){

    document.write(`El mes ${mes} tiene ${meses[mes - 1]} días.`)
}