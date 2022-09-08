//ejercicio 1
// let readlineSync = require('readline-sync');
// let mensaje = readlineSync.question("Ingrese su mensaje:");
// console.log(mensaje);

// console.log('Hola desde Node');

//ejercicio 2
// let readlineSync = require('readline-sync');
// let mensaje = readlineSync.question("Ingrese su mensaje:");
// let mensaje2 = readlineSync.question("Ingrese su mensaje:");
// console.log(mensaje);
// console.log(mensaje2);

//ejercicio 3
let readlineSync = require('readline-sync');

function calcularArea (a,b){
 calculo= a*b;
 return calculo
};
let base = readlineSync.question("Ingrese la base:");
let altura = readlineSync.question("Ingrese la altura:");
let area= calcularArea(base,altura);

console.log('El area del triángulo es: '+ area);

// let readlineSync = require('readline-sync');
// let alturaPersona = readlineSync.question("Indique la altura de la persona:");
// console.log(alturaPersona);
