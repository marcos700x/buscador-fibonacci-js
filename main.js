//Asignamos un valor vacio al resultado final
result = ''

//Declaramos la funcion fibonacci, donde se haran los calculos y donde le pasaremos un argumento que es la cantidad de digitos que debe de tener la serie
function fibonacci(limit) {
    //declaramos un array con los dos primeros numeros de fibonacci, que son 0 y 1
    const secuency = [0, 1];
    //con un bucle for vamos iterando los valores, declaramos i como 2, entonces el valor numero 'i' del array es igual a los ultimos 2 elementos del array
    for (let i = 2; i < limit; i++) {
        secuency[i] = secuency[i - 1] + secuency[i - 2];
    }
    //El resultado es igual al ultimo digito de la serie de fibonacci
    result = secuency[secuency.length - 1];
}
//declaramos la variable numberfield que representa al input del HTML
numberfield = document.querySelector('input');
//Lo mismo para el contenedor del resultado
containerQuery = document.querySelector('.query')
//Donde ira la respuesta es igual al elemento .result de HTML
var answer = document.querySelector('.result')

//Declaramos la funcion fibonacciQuery, que se encargara de mostrar el resultado al usuario
function fibonacciQuery() {
    //Unos estiilos para animar el contenedor del resultado
    containerQuery.style.opacity = "1"
    containerQuery.style.transform = "translate(0)";
    //Declaramos la variable selectedValue y le asignamos el valor del valor introducido en el input
    var selectedValue = numberfield.value;
    //Ejecutamos la funcion fibonacci con el valor que le pasamos desde el input
    fibonacci(selectedValue)

    //La respuesta que es igual al ultimo digito de la serie que buscamos se introduce en el elemento .result de HTML
    answer.textContent = result;
}
