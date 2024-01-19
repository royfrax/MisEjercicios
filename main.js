//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirCadena = (cadena ="") =>(!cadena) // funcion flecha con operador ternario| (!cadena) es la condicion
? console.warn("no ingresaste la cadena de texto") // es el bloque de ejecucion de la condicion
: console.info(cadena.split("").reverse().join(""));// es el else (sino)

invertirCadena(); //funcion invocada
invertirCadena("hola mundo injusto");
invertirCadena("porque la gente se ofende con eso");

