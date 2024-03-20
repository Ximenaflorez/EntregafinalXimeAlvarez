

const links =[
    {text: "Crédito", url :"./index.html"},
    {text: "Consulta", url :"./entrada.html"},
    {text: "Amortización", url :"./amortizacion.html"},
]

const navBar = document.getElementById ("navBar")

links.forEach(link => {
    const ancla =document.createElement ('a');
    ancla.textContent =link.text;
    ancla.href =link.url;
    navBar.appendChild(ancla);
})

const montoPrestamo = parseFloat(localStorage.getItem("montoPrestamo"));
const plazoPrestamo = parseInt(localStorage.getItem("plazoPrestamo"));
const nombreCompleto = localStorage.getItem("nombreCompleto");
const edadPersona = parseInt(localStorage.getItem("edadPersona"));
const tasaInteresPrestamo = parseFloat(localStorage.getItem("tasaInteres"));
let seguroPrestamo = 0.1;
let cedula = 12345678;
const llenarTabla =document.querySelector('#listaTabla tbody');


let cuota = montoPrestamo * (Math.pow(1 + tasaInteresPrestamo / 100, plazoPrestamo) * tasaInteresPrestamo / 100) / (Math.pow(1 + tasaInteresPrestamo / 100, plazoPrestamo) - 1);

class CreditoConsumo{
    constructor(){
        this.nombre = nombreCompleto;
        this.edad = edadPersona;
        this.montoTotal = montoPrestamo;
        this.cuotaMensual= cuota;
        this.plazo = plazoPrestamo;
        this.tasaMes = parseFloat(tasaInteresPrestamo);
        this.seguro = parseFloat(montoPrestamo*seguroPrestamo/100);
    }
   
   mostrarCredito() {
    const informacionCreditoElement = document.getElementById("informacionCredito");

    informacionCreditoElement.textContent = `Hola, ${this.nombre}. Solicitaste un crédito de: $${new Intl.NumberFormat('es-CO').format(this.montoTotal)}. Tus cuotas serán de: $${new Intl.NumberFormat('es-CO').format(this.cuotaMensual)} a un plazo de ${this.plazo} meses con una tasa fija de ${this.tasaMes}% y un seguro de: $${new Intl.NumberFormat('es-CO').format(this.seguro)}`;
}
}

const credito = new CreditoConsumo();
credito.mostrarCredito();


    calcularPrestamo(montoPrestamo, plazoPrestamo, tasaInteresPrestamo);


function calcularPrestamo(monto, plazo, tasaInteres) {
    let cuotas = [];
    
    for (let i = 0; i < plazo; i++) {        
        let saldoInteres = parseFloat(monto * (tasaInteres / 100));
        let saldoCapital = cuota - saldoInteres;
        monto = parseFloat(monto - saldoCapital);

        // almacenar resultados en el array cuotas
        cuotas.push({
            cuotaNumero: i+1,
            montoCuota: parseInt(cuota),
            saldoCapital: parseInt(saldoCapital),
            saldoInteres: parseInt(saldoInteres),
            saldoRestante: parseInt(monto),
        });
    }
  
    cuotas.forEach((cuota) => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${cuota.cuotaNumero}</td>
    <td>$${new Intl.NumberFormat('es-CO').format(cuota.montoCuota.toFixed(2))}</td>
    <td>$${new Intl.NumberFormat('es-CO').format(cuota.saldoCapital.toFixed(2))}</td>
    <td>$${new Intl.NumberFormat('es-CO').format(cuota.saldoInteres.toFixed(2))}</td>
    <td>$${new Intl.NumberFormat('es-CO').format(cuota.saldoRestante.toFixed(2))}</td>
    `;
    llenarTabla.appendChild(row)
})};




