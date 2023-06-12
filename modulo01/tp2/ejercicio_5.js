// Crear una función que muestre información sobre una cadena de texto que se le pasa como
// argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
// sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function info (texto){

   if (texto === texto.toLowerCase()){
        document.write("La palabra solo contiene minusculas")
        
   }else if (texto === texto.toUpperCase()){
      document.write("La palabra solo contiene mayusculas")
   }else {document.write("La palabra contiene minusculas y mayusculas")}

}

let texto = prompt("Ingrese una palabra")

info(texto)