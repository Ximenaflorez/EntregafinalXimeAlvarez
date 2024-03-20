

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



document.addEventListener("DOMContentLoaded", function() {
    const calcularBtn = document.getElementById("calcularBtn");
})
  
    calcularBtn.addEventListener("click", async function() {
      // Obtener valores del formulario
      const montoPrestamo = parseFloat(document.getElementById("monto").value);
      const plazoPrestamo = parseInt(document.getElementById("plazo").value);
      const nombreCompleto = document.getElementById("nombre").value;
      const edadPersona = parseInt(document.getElementById("edad").value);

// a partir de acá voy a poner lo de la api 

const interesesAPI = await obtenerTasasDeInteres();
console.log (interesesAPI);
        const tasaInteres = obtenerTasaInteres(interesesAPI, edadPersona, plazoPrestamo);
       

        // Verificar los criterios
        if ((plazoPrestamo >= 24 && plazoPrestamo <= 84) && (edadPersona >= 18 && edadPersona <= 84)) {
           
            // Almacenar en el almacenamiento local
            localStorage.setItem("montoPrestamo", montoPrestamo);
            localStorage.setItem("plazoPrestamo", plazoPrestamo);
            localStorage.setItem("nombreCompleto", nombreCompleto);
            localStorage.setItem("edadPersona", edadPersona);
            localStorage.setItem("tasaInteres", tasaInteres);

            // Redirigir a la página de amortización
            window.location.href = "amortizacion.html";
        } else if (plazoPrestamo < 24 || plazoPrestamo > 84) {
            Swal.fire({
                title: 'Error',
                text: 'Debes elegir entre 24 y 84 meses',
                icon: 'error',
                confirmButtonText: 'Regresar'
            })
            ;
        } else if (edadPersona < 18 || edadPersona > 84) {
            Swal.fire({
                title: 'Error',
                text: 'Debes elegir una edad entre 18 y 84 años',
                icon: 'error',
                confirmButtonText: 'Regresar'
            });
        }
    });

    async function obtenerTasasDeInteres() {
        
        try {
            const url = "https://65f76d8db4f842e808859845.mockapi.io/api/v1/intereses";
            const data = (await fetch(url)).json();
            
            return data;
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    }

    function obtenerTasaInteres(interesesAPI, edad, plazo) {
        // Buscar la tasa de interés correspondiente en base a la edad y el plazo del préstamo
        for (const interes of interesesAPI) {
            const rangoEdad = interes.rango_edad;
            const rangoPlazo = interes.rango_tiempo_credito;
            if (edad >= rangoEdad[0] && edad <= rangoEdad[1] && plazo >= rangoPlazo[0] && plazo <= rangoPlazo[1]) {
                return interes.tasa_interes;
            }
        }
        return null; 
    };

