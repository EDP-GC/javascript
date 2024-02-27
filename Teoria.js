function decimalABinario(decimal){
    let res = []
    let resDiv = decimal;
    while(resDiv !== 0){
        resDiv = Math.floor(resDiv / 2)
        res.push(parseInt(resDiv%2))
    }
    return res
}

console.log(decimalABinario(10))

let nombre = "Leonardo"


//      Bucles

// FOR

// INICIALIZABA ; CONDICION ; INCREMENTO / DECREMENTO 
// TRUE para volver a ejecutar el bucle
let contador = 0;
for(let i = 0; i < nombre.length; i++){
    if(nombre[i].toLowerCase() === 'a' || nombre[i].toLowerCase() === 'e' || nombre[i].toLowerCase() === 'i' || nombre[i].toLowerCase() === 'o' || nombre[i].toLowerCase() === 'u'){
        contador++
    }
}
return contador
// WHILE

// CONDICION  - TRUE para volver a ejecutar el bucle
while(condition){
    // INCREMENTO DE SER NECESARIO, PARA INDICAR SALIDA
}

// DO - WHILE 
// DO WHILE - SI O SI se ejecuta al menos 1 vez, porque primero ejecuta y despues pregunta si sigue
// TRUE para volver a ejecutar el bucle
do{

}while(condition)




let u = "hola"
let x = "h"

console.log(u + x)



// DECIMAL = +++(1*2)**i

// DECIMAL = 0

// DECIMAL += (0*2)**i


let num = 100;

let acumulador = 0;

for (let i = 0; i <= num; i++) {
    acumulador += i
}



// 1 - 10

// i = 0 , i = 1, i = 2, i = 3, i = 4, i = 5
// c = 0 , c = 1, c = 3, c = 6, c = 10, c = 15

for (let i = 0; i <= num; i++) {
    contador += i
}
return contador




let arr = [ "LA", "LD", "LC", "LE", "LB"]
for (let i = 0; i < arr.length; i++) {
    if(arr[i] === "LE"){
        arr[i] = "LW"
    }
}

console.log(arr)




// Arrays ...       .push(valor) // Agrega al final de lista
//                  .pop() // Sacaba el ultimo de la lista
//                  .unshift(valor) // Agrega al pricipio d la lista
//                  .shift() // sacabe el primero de la lista
