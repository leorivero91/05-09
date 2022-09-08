let readlineSync = require ('readline-sync');
let vuelta1 = readlineSync.questionInt("Indique el tiempo de la vuelta 1: ");
let vuelta2 = readlineSync.questionInt("Indique el tiempo de la vuelta 2: ");
let vuelta3 = readlineSync.questionInt("Indique el tiempo de la vuelta 3: ");
let vuelta4 = readlineSync.questionInt("Indique el tiempo de la vuelta 4: ");
let tiempoTotal = vuelta1 + vuelta2 + vuelta3 + vuelta4;
console.log('El tiempo total es: ', tiempoTotal);
console.log('El promedio total de las vueltas es: ', tiempoTotal/4);