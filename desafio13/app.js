// EJERCICIO 1 DEL DESAFIO 13.
const ingresos = [1500, 2500, 84683, 135353, 1535, 4343354, 435453, 78351, 1878, 48483, 354883, 3843];

const egresos = [1500, 2500, 1155, 1533, 5434, 5434534, 4543, 7816, 95634, 9433, 53133, 348133];

let totalIngresos = ingresos.reduce((a, b) => a + b, 0); 
let totalEgresos = egresos.reduce((a, b) => a+ b, 0);

console.log(totalIngresos);
console.log(totalEgresos);

let flujoDeCaja = function (){
    if(totalEgresos > totalIngresos){
        console.log("Este flujo genera ganacias!")
    }
    else if(totalEgresos < totalIngresos ) {
        console.log("Este flujo genera perdida")
    }
    else{
        console.log("Este flujo no genera perdida ni ganancias");
    }
}
flujoDeCaja();

// EJERCICIO N° 2 DEL DESAFIO 13

const capital = [150000, 300000, 485000];
const plazo = [30, 180, 60];
const taza = [15, 10, 23];

function generarInteres (){
    for (let i= 0; i < 3; i++) {
        let interes = capital[i] * plazo [i] * taza[i] / 100 ;
        let nombreDelPlan = 1 + i;
        console.log("el nombre del plan es " + nombreDelPlan)
        console.log("el interes es de " + interes);
    }
};

generarInteres()