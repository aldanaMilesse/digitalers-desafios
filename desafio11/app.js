// Ejercicio N° 1 del Desafio 11
let costoFijo = Number(prompt("Ingrese el costo fijo: "));
console.log(costoFijo)

let precioDeVenta = Number(prompt("Ingrese el precio de Venta: "))
console.log(precioDeVenta)

let costoVariables = Number(prompt("Ingrese el costo variable: "))
console.log(costoVariables)

let resta = precioDeVenta - costoVariables;

let puntoDeEquilibrio = costoFijo / resta;

console.log(puntoDeEquilibrio)

// Ejercicio N° 2 del Desafio 11

let ingresoTotal = Number(prompt("Cuanto es el ingreso total? "))
let gastosNecesarios = ingresoTotal * 50 / 100;
let gastosOpcionales = ingresoTotal * 30 / 100;
let ahorroEInversion = ingresoTotal * 20 / 100;

console.log("el monto a dedicar a gastos necesarios es: " + gastosNecesarios);
console.log("el monto a dedicar a gastos opcionales es: " + gastosOpcionales);
console.log("el monto a dedicar a ahorro e inversion es: " + ahorroEInversion);