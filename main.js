//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function ElCuentaCaracteres(cadena = "")
{
    if(!cadena){
        console.warn("no ingresaste la cadena de texto")
    } else {
        console.info(`la cadena, "${cadena}" tiene ${cadena.length} caracteres`);
    }
}
ElCuentaCaracteres("hola lilith");

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".


const recortarTexto = (cadena ="", longitud = undefined) => (!cadena)
    ?console.warn("no ingresaste la cadena de texto")
    :(longitud===undefined)
        ?console.warn("No ingresaste la longitud para recortar el texto")
        :console.info(cadena.slice(0,longitud))

        
    recortarTexto("no ingresaste la cadena de texto",10);
    recortarTexto()

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirCadena = (cadena ="") =>(!cadena) // funcion flecha con operador ternario| (!cadena) es la condicion
? console.warn("no ingresaste la cadena de texto") // es el bloque de ejecucion de la condicion
: console.info(cadena.split("").reverse().join(""));// es el else (sino)

invertirCadena(); //funcion invocada
invertirCadena("hola mundo injusto");
invertirCadena("porque la gente se ofende con eso");

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.


//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.


//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
