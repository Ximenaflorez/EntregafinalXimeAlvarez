



let montoPrestamo = prompt("Ingresa el valor que deseas solicitar");
let plazoPrestamo = prompt("Elige el plazo en el que vas a pagar");
const tasaInteresPrestamo = 3.25;
let seguroPrestamo = 0.1;
let nombreCompleto = prompt("Ingresa tu nombre");
let cedula = 12345678;
let edadPersona = prompt("Ingresa la edad");


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
   mostrarCredito (){
    console.log ("hola, "+this.nombre +" solicitaste un credito de: $" +this.montoTotal+" tus cuotas serán de: $"+ parseInt(this.cuotaMensual)+ " a un plazo de "+this.plazo+" meses un tasa fija de "+this.tasaMes+" y un seguro de: "+ this.seguro)
   }
}

const credito = new CreditoConsumo();



// Condicional de crédito, debe elegir entre 24 y 84 meses para que le permita realizar el préstamo y tambien de los 18 a 84 años

if ((plazoPrestamo >= 24 && plazoPrestamo <= 84) && (edadPersona >= 18 && edadPersona <= 84)) {
    credito.mostrarCredito();
    calcularPrestamo(montoPrestamo, plazoPrestamo, tasaInteresPrestamo);
} else {
    if (plazoPrestamo < 24 || plazoPrestamo > 84) {
        console.warn("Debes elegir entre 24 y 84 meses");
        plazoPrestamo = prompt("Elige el plazo en el que vas a pagar");
    } else if (edadPersona < 18 || edadPersona > 84) {
        console.warn("Debes elegir una edad entre 18 y 84 años");
        edadPersona = prompt("Ingresa la edad");
    }

    credito.mostrarCredito();
    calcularPrestamo(montoPrestamo, plazoPrestamo, tasaInteresPrestamo);
}

// se genera la función y se exponen las variables locales
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

    // imprimo los resultados 
    cuotas.forEach((cuota) => {
        console.log(
            "Cuota: " +
            cuota.cuotaNumero +
            " - Monto cuota: $" +
            cuota.montoCuota +
            " Saldo capital: $" +
            cuota.saldoCapital +
            " Interés: $" +
            cuota.saldoInteres +
            " Saldo restante: $" +
            cuota.saldoRestante
        );
    });

}

 // Hago navbar dinamico

const links =[
    {text: "Credito", url :"./index.html"},
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

