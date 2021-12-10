//verifica que el numero sea mayor a 1000 y menor a 2000//
let numero = prompt("Ingresa un número del 1 al 2000");
if (numero > 1 &&  numero <= 1000){
    alert ("El número ingresado es menor o igual a 1000");
}
else if (numero >1000 && numero <= 2000){
    alert ("Ingresaste un número mayor a 1000");
}
else {
    alert ("El número ingresado está fuera del rango solicitado!");
}
let hola = prompt("Ingresa la palabra Hola, tal como lo ves en pantalla");
if (hola === "Hola"){
    console.log(hola);
}
else {alert ("El valor ingresado no es Hola");
}
//verifica que el numero este comprendido entre 10 y 50, y sea menor a 200//
let numero2 = prompt("Ingresa un número del 1 al 100");
if(numero2 >=10 && numero2 <= 50){
alert ("El número ingresado está comprendido entre el 10 y el 50");
}
else if (numero2 >= 1 && numero2 <10 || numero2 > 50 && numero2 <= 200){
    alert ("El número ingresado es menor que 10 o mayor a 50");
}
else {
    alert ("El número ingresado está fuera del rango solicitado!");
}