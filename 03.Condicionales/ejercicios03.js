
function mayorEdad(personas){
    //Crea una condición que comprueba si las personas pasadas por parámetros son mayores de edad
    //Si son mayores de edad, tienes que retornar "Es mayor de edad", en caso que no cumpla la condición 
    //tendrás que retornar "Es menor de edad"
    //Tu código:👇
    if(personas < 18){
        return "Es menor de edad"
    }else{
        return "Es mayor de edad"
    }

}

function salario(personal, exp){
    // En una empresa se le paga al personal un bono según su la experiencia que llevan en la empresa
    // si la persona lleva menor o igual a 5 años el bono es de $5.000, mayor a 5 años y menor a 20 años es de $10.000
    // mayor o igual a 20 años, el bono es de $15.000. tendrás que retornar un mensaje con el nombre del personal y el bono correspondiente
    // Ejemplo: "Pedro tu bono es de $10.000"
    // Tu código:👇
    switch(true){
        case exp <= 5:
            return personal + " tu bono es de $5.000"
        case exp > 5 && exp < 20:
            return `${personal} tu bono es de $10.000`
        case exp >= 20:
            return `${personal} tu bono es de $15.000`
    }
}

function numPar(num){
    // Retorna true si 'num' es un numero par, casi contrario retorna false
    // Tu código:👇
    if(num % 2 === 0) return true
    return false
}

function numImpar(num){
    // Retorna true si 'num' es un numero impar, casi contrario retorna false
    // Tu código:👇
    return num % 2 === 1
}

function numPositivoNegativo(num){
    // Tendrás que retornar un mensaje según si el numero es positivo o negativo
    // Positivos -> "El numero es positivo"
    // Negativo -> "El numero es negativo"
    // Tu código:👇
    if(num >= 0) return "El numero es positivo"
    return "El numero es negativo"
}

function cambioPesos(monto, pago){
    // Una empresa recibe sus pagos en monedas extranjeras tanto dólares como euros. Tendrás hacer un programa
    // que si el pago fue en "dólares" o "euros" convertir a pesos argentinos y retornar el resultado.
    //  1 USD = $375  y 1 EUR = $383 . Si el pago fue en 'pesos argentinos', retornar el precio tal cual
    // Tu código:👇
    switch (pago) {
        case "dólares":
            return monto * 375
        case "euros":
            return monto * 383
        default:
            return monto
    }
}

function climaActual(clima){
    //Haz un programa el cual te diga que te recomienda hacer según el clima actual! en base a la siguiente información:
    // "Soleado" -> "El día está soleado puedes salir tranquilo!"
    // "Lluvioso" -> "Está lloviendo, sal con un impermeable!"
    // "Frio" -> "Si sales sin abrigo, te congelas!"
    // "Ventoso" -> "Hay mucho viento, sería bueno un rompe viento!"
    // Tu código:👇
    switch (clima) {
        case "Soleado":
            return ""
        case "Lluvioso":
            return ""
        case "Frio":
            return ""
        case "Ventoso":
            return ""
    }
}

function vocales(char){
    // Se pasaran varias letras por parámetros, tendrás que comprobar que sea una vocal y retornar el siguiente
    // mensaje "Es vocal"
    // Tu código:👇
    let vocales = ["a", "e","i","o","u"]
    return vocales.includes(char.toLowerCase()) ?  "Es vocal" : false
}

function nValor(juan){
    //Juan tiene N dólares, David tiene la mitad de lo que posee Juan y José la mitad de lo que poseen Juan y David juntos.
    //Retornar el promedio de la cantidad de dinero que tienen entre los tres y redondear hacia arriba
    //Tu código:👇
    return Math.ceil((juan+(juan/2)+(juan+(juan/2))/2)/3)
}

function numMúltiplo(num1, num2){
    //Comprueba si num1 y num2 son múltiplos entre si, en caso de serlos retorna "Son múltiplos",
    //caso contrario retornar "No son múltiplos"
    //Tu código:👇
    if(num1 % num2 === 0) return  "Son múltiplos"
    return  "No son múltiplos"
}

function length(str){
    // Comprueba si 'str' tiene un longitud mayor que 5, de ser así tienes que retornar true
    // caso contrario retornar false.
    // Tu código:👇
    return str.length > 5
}

module.exports = {
    mayorEdad,
    salario,
    numPar,
    numImpar,
    numPositivoNegativo,
    cambioPesos,
    climaActual,
    vocales,
    nValor,
    numMúltiplo,
    length
}
