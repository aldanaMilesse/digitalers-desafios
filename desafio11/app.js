// ------- Ejercicio N° 1 del Desafio 11 ----
let buttoCalcular = document.getElementById("calcular");
buttoCalcular.addEventListener('click', calcular)

function calcular (){
    let costoFijo = Number(document.getElementById("costoFijo").value); 
    let precioDeVenta = Number(document.getElementById("precioDeVenta").value);
    let costoVariables = Number(document.getElementById("costoVariable").value);
    let mostrarResultado = document.querySelector(".mostrarResultado");

    let puntoDeEquilibrio = costoFijo / ( precioDeVenta - costoVariables );

    mostrarResultado.textContent = "El punto de equilibrio es: "+ puntoDeEquilibrio;
}