

 // Hago navbar dinamico

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

// llamar con DOM

const buttonContinuar = document.getElementById ("buttonContinuar");

buttonContinuar.addEventListener("click",function() {
    window.location.href = "entrada.html";
});

