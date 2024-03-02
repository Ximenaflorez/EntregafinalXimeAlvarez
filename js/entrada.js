

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



document.addEventListener("DOMContentLoaded", function() {
    const calcularBtn = document.getElementById("calcularBtn");
})
  
    calcularBtn.addEventListener("click", function() {
      // Obtener valores del formulario
      const montoPrestamo = parseFloat(document.getElementById("monto").value);
      const plazoPrestamo = parseInt(document.getElementById("plazo").value);
      const nombreCompleto = document.getElementById("nombre").value;
      const edadPersona = parseInt(document.getElementById("edad").value);

if ((plazoPrestamo >= 24 && plazoPrestamo <= 84) && (edadPersona >= 18 && edadPersona <= 84)) {
      //local storage 
      localStorage.setItem("montoPrestamo",montoPrestamo);
      localStorage.setItem("plazoPrestamo",plazoPrestamo );
      localStorage.setItem("nombreCompleto",nombreCompleto);
      localStorage.setItem("edadPersona",edadPersona);
      window.location.href = "amortizacion.html";

    }
    
else if (plazoPrestamo < 24 || plazoPrestamo > 84) {
    alert("Debes elegir entre 24 y 84 meses");   
} else if (edadPersona < 18 || edadPersona > 84) {
    alert("Debes elegir una edad entre 18 y 84 años");
}
});


