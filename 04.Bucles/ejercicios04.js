function cantidadDeVocales(phrase){
// Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
// Tu código:👇
let contador = 0
    for (let i = 0; i < phrase.length; i++) {
        if(phrase[i].toLowerCase() === 'a' || phrase[i].toLowerCase() === 'e' || phrase[i].toLowerCase() === 'e' || phrase[i].toLowerCase() === 'i' || phrase[i].toLowerCase() === 'o' || phrase[i].toLowerCase() === 'u' ){
            contador++
        }
    }
    return contador
}

function primerDivisible(divisor, dividendo) {
// Encuentra el primer número divisible por 'divisor' a partir de un número dado utilizando un bucle while
// Tu código:👇
    while(divisor <=  dividendo){
        if(dividendo % divisor === 0){
            return divisor
        }
        divisor++
    }
}



function encuentraX(x){
//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇
    let x = 10
    for (let i = 1; i <= 100; i++) {
        console.log(i)
        if(i === x){
            return "El numero X es: " + i
        }   
    }
}

function sumandoTodo(num){
// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇
    let contador = 0;
    for (let i = 0; i <= num; i++) {
        contador += i
    }
    return contador
}

function BinarioADecimal(num) {
// La funcion recibe por parametro, un numero binario pero en tipo de dato String
// debes tomar este numero binario y ayudandote de un bucle pasarlo a binario
// tu código:👇
    /*                  '1010110'   split().reverse() [1,0,1,0] = [0,1,0,1] - parseInt('1')
            10  /   2
            0       5   / 2
                    1     2 / 2
                          0  1          1010 => (0*2)**i+(1*2)**i+(0*2)**i+(1*2)**i

                          num.split('')
                            .reverse()
    */
    // '1' * 2 = 2
    let binario = '111'.split("").reverse()
    let contenedor = 0;
    for (let i = 0; i < binario.length; i++) {
        contenedor += parseInt(binario[i])*2**i
    }
    console.log(contenedor)
}

function Fibonacci(n){
// Realiza una secuencia Fibonacci con el indice pasado por paramentro
// Se puede representar mediante la siguiente fórmula: F(n) = F(n-1) + F(n-2)
// Tu código:👇
    if(n===0 || n === 1){
        return n
    }
    return Fibonacci(n-1) + Fibonacci(n-2)
}

function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇
    if(numero <= 1) return "no es primo"
    for (let i = 2; i < numero; i++) {
        if(numero % i === 0) return numero + " no es primo."
    }
    return numero + " es primo."
}

function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇                              
    let cadenaRev = cadena.split('').reverse()
    let cadenaFinal = ""
    for (let i = 0; i < cadenaRev.length ; i++) {
        cadenaFinal += cadenaRev[i]
    }
    return cadenaFinal
}
  
module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    Fibonacci,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}