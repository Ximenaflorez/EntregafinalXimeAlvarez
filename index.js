

//parametros iniciales para realizar el simulador 

let montoPrestamo = prompt("Ingresa el valor que deseas solicitar");
let plazoPrestamo = prompt("Elige el plazo en el que vas a pagar");
const tasaInteresPrestamo = 3.25;
let nombreCompleto = "Ximena";
let cedula = 12345678;

 // Condicional de crédito, debe elegir entre 1 y 12 meses para que le salga la taza de amortización
if(plazoPrestamo <= 12){
    calcularPrestamo(montoPrestamo, plazoPrestamo, tasaInteresPrestamo);
 } else {
        console.warn("Debes elegir entre 1 y 12 meses")
        plazoPrestamo = prompt("Elige el plazo en el que vas a pagar");
        calcularPrestamo(montoPrestamo, plazoPrestamo, tasaInteresPrestamo);
    };



//se genera la función y se exponen las variables locales 
function calcularPrestamo(monto, plazo, tasaInteres) {
    let cuota = monto * (Math.pow(1 + tasaInteres / 100, plazo) * tasaInteres / 100) / (Math.pow(1 + tasaInteres / 100, plazo) - 1);

// aquí se caculta la tasa de amortización. como va disminuyendo con cada cuota 
    for (let i = 1; i <= plazo; i++) {
        let saldoInteres = parseFloat(monto * (tasaInteres / 100));
        let saldoCapital = cuota - saldoInteres;
        monto = parseFloat(monto - saldoCapital);

        //se imprime  los resultados
        console.log("Cuota: " + i + " - Monto cuota: $" + parseInt(cuota) + " Saldo capital: $" + parseInt(saldoCapital) + " Interés: $" + parseInt(saldoInteres) + " Saldo restante: $" + parseInt(monto));
    }
}

