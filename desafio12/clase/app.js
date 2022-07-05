let valorUno = Number (prompt("ingrese un numero"));
console.log(valorUno);

let valorDos = Number(prompt("Ingrese un segundo numero"));
console.log(valorDos);

let valorTres = Number(prompt("Ingrese un tercer numero"));
console.log(valorTres);

if(valorUno > valorDos && valorUno > valorTres){
    console.log("el numero mayor es el valor 1: " + valorUno);
}
else if(valorDos > valorUno && valorDos > valorTres){
    console.log("el numero mayor es el valor 2: " + valorDos);
}
else if(valorTres > valorUno && valorTres > valorDos){
    console.log("el numero mayor es el valor 3: " + valorTres);
}
else{
    console.log("hola")
}