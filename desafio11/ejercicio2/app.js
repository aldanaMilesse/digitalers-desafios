let addCategory = document.getElementById('addCategory');

// al hacer click en el button agregar categoria se abre un formulario.
let openForm = document.getElementById('openForm'); 
openForm.addEventListener('click', () => {
    addCategory.style.display ='flex';
});

// click en el button del form y llama una funcion para crear la categoria
let newCategory = document.getElementById('newCategory');
newCategory.addEventListener('click', createCategory);

// En esta funcion obtengo los valores de ingresos, el nombre de la categoria, el porcentaje y el monto total destinado a cada categoria, llamo la funcion mostrar resultado y cierro el form. 
function createCategory (e){
    e.preventDefault()
    let ingresos = Number(document.getElementById('ingreso').value); 
    let name = document.getElementById('name').value;
    let presupuesto = Number(document.getElementById('presupuesto').value);
    let montoTotal = (ingresos * presupuesto) / 100;
    mostrarResultado(name, presupuesto, montoTotal);

    addCategory.style.display = 'none';
};

// en esta funcion creo elementos en el html para mostrar las categorias, su nombre, presupuesto y el monto total. 
function mostrarResultado (name, presupuesto, montoTotal){
    const table = document.querySelector("table");
    const tBody = document.createElement("tbody");
    const tdName = document.createElement("td");
    const tdPresupuesto = document.createElement("td");
    const tdMonto = document.createElement("td");

    tdName.textContent = name;
    tdPresupuesto.textContent = presupuesto;
    tdMonto.textContent = montoTotal;

    table.appendChild(tBody);
    tBody.appendChild(tdName);
    tBody.appendChild(tdPresupuesto);
    tBody.appendChild(tdMonto);
}