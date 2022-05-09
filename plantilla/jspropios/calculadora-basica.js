//Son las funciones requeridas para la calculadora basica
function Suma() {
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    let sum = parseInt(num1) + parseInt(num2);
    alert("La suma es: " + sum);
}

function Resta() {
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    let res = num1-num2;
    alert("La resta es: " + res);
}
function Multiplicacion() {
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    let mul = num1*num2;
    alert("La multiplicación es: " + mul);
}

function Division() {
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    let div = num1/num2;
    alert("La división es: " + div);
}
