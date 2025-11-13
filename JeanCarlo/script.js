//ejercicio 3

let largo = parseFloat(prompt("Ingresa el largo del potrero en metros:"));
let ancho = parseFloat(prompt("Ingresa el ancho del potrero en metros:"));

if (isNaN(largo) || isNaN(ancho) || largo <= 0 || ancho <= 0) {
    alert("Por favor ingresa valores numéricos válidos y mayores a cero.");
} else {

    let perimetro = 2 * (largo + ancho);

    alert(`El perímetro del potrero es de ${perimetro.toFixed(2)} metros.`);
}