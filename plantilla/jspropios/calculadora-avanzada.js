function agregaDigito(digito) {
    let display = document.getElementById("display");
    display.value = display.value+digito;
}

function agregarOperador(operador) {
    let display = document.getElementById("display");
    display.value = display.value + operador;
}

function calcularResultado() {
    let display = document.getElementById("display");
    let resultado = eval(display.value);
    display.value = resultado;
}

function calcularPotencia() {
    let display = document.getElementById("display");
    let base = eval(display.value);
    let exponente = document.getElementById("npotencia").value;
    display.value = Math.pow(base,exponente);
}

function calcuarFactorial() {
    let display = document.getElementById("display");
    let numero = eval(display.value);
    let factorial = 1;
    for(let i=1; i<=numero; i++){
        factorial = factorial*i;
    }
    display.value = factorial;
}

function limpiar() {
    let display = document.getElementById("display");
    display.value = null;
}