// Ejercicio N° 1 del Desafio 12
let edad = prompt("Ingrese su edad:");

if(edad >= 18){
    alert("Bienvenido! / Bienvenida!")
}
else{
    alert("Error -- No cumples con la edad minima")
}

// Ejercicio N° 2 del Desafio 12

let usario = prompt("Ingrese el usuario");
let contraseña = Number(prompt ("Ingrese la contraseña"));

if( usario === "admin" & contraseña === 1234){
    alert("Bienvenido/a ! El usuario y la contraseña son correctas")
}
else{
    alert("El usuario o/Y contraseña son incorrectos")
}