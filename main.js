//Asignamos un valor vacio al resultado final
lastDigit = ''
secuencyAnswer = ''
sumAll = 0;
average = 0;
mediana = 0;

//Declaramos la funcion fibonacci, donde se haran los calculos y donde le pasaremos un argumento que es la cantidad de digitos que debe de tener la serie
function fibonacci(limit) {
    //declaramos un array con los dos primeros numeros de fibonacci, que son 0 y 1
    const secuency = [0, 1];
    //con un bucle for vamos iterando los valores, declaramos i como 2, entonces el valor numero 'i' del array es igual a los ultimos 2 elementos del array
    for (let i = 2; i < limit; i++) {
        secuency[i] = secuency[i - 1] + secuency[i - 2];
    }
    //El resultado es igual al ultimo digito de la serie de fibonacci
    lastDigit = secuency[secuency.length - 1];
    secuencyAnswer = secuency
    //Este bucle for sirve para sumar todos los elementos del array y asi poder sacar la media de toda la suma del arreglo
    for (let j = 0; j < secuency.length; j++) {
        console.log(secuency[j])
        sumAll = sumAll + secuency[j]
        average = sumAll / secuency.length;
    }
    //Mediana
    if (limit %2 == 0) {
        console.log('Es un numero par')
        mediana = (secuency[secuency.length / 2] + secuency[(secuency.length / 2) - 1])/2
    }else{
        mediana = secuency[(secuency.length / 2) - 0.5] 
        console.log('Es un numero inpar')
    }
    console.log(mediana)

}
//declaramos la variable numberfield que representa al input del HTML
numberfield = document.querySelector('input');
//Lo mismo para el contenedor del resultado
containerQuery = document.querySelector('.query')
//Donde ira la respuesta es igual al elemento .resultadoSerie de HTML
var resultadoSerie = document.querySelector('.resultadoSerie');
var resultadoUltimo = document.querySelector('.resultadoUltimo');
var resultadoMedia = document.querySelector('.resultadoMedia');
var resultadoMediana = document.querySelector('.resultadoMediana');

//Declaramos la funcion fibonacciQuery, que se encargara de mostrar el resultado al usuario
function fibonacciQuery() {
    //Declaramos la variable selectedValue y le asignamos el valor del valor introducido en el input
    var selectedValue = numberfield.value;
    //Ejecutamos la funcion fibonacci con el valor que le pasamos desde el input
    fibonacci(selectedValue)

    //La respuesta que es igual al ultimo digito de la serie que buscamos se introduce en el elemento .resultadoSerie de HTML
    resultadoSerie.textContent = secuencyAnswer;
    resultadoUltimo.textContent = lastDigit;
    resultadoMedia.textContent = average;
    resultadoMediana.textContent = mediana;
}

function compruebaValor(valor) {
    if (valor.value < 0) {
        valor.value = 1;
    }
}
document.getElementById('inputNumber').addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        fibonacciQuery();
    }
})