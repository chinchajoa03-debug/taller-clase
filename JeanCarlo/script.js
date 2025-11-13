//ejercicio 2

let ancho = parseFloat(prompt("Ingresa el ancho de la pared en metros:"));
let alto = parseFloat(prompt("Ingresa el alto de la pared en metros:"));

if (isNaN(ancho) || isNaN(alto) || ancho <= 0 || alto <= 0) {
    alert("Por favor ingresa valores numéricos válidos y mayores a cero.");
} else {

    let area = ancho * alto;

    alert(`El área de la pared es de ${area} metros cuadrados.`);
}