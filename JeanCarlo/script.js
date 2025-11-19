//1.
/*
let producto1= parseFloat(prompt("Ingrese el precio del primer producto"))
let producto2= parseFloat(prompt("Ingrese el precio del segundo producto"))
let producto3= parseFloat(prompt("Ingrese el precio del tercer producto"))

  let total = producto1 + producto2 + producto3

  console.log("El total de tu compra es: $" + total)
//2.-----------------------------------------------------------------------------

let altoPared= parseFloat(prompt("ingrese el alto de la pared"))
let anchoPared= parseFloat(prompt("ingrese el ancho de la pared"))

let area= anchoPared*altoPared

console.log("el area es: " + area)
//3.-----------------------------------------------------------------------------

let largoPotrero= parseFloat(prompt("ingrese el largo del potrero"))
let anchoPotrero= parseFloat(prompt("ingrese el ancho del potrero"))

let perimetro= 2*(largoPotrero+anchoPotrero)

console.log("el perimetro del potrero rectangular es: " + perimetro)
//4.-----------------------------------------------------------------------------

let fahrenheit= parseFloat(prompt("ingrese la temperatura en °F"))

let celsius = (fahrenheit - 32) * 5/9

console.log("la temperatura en grados celcius es: " + celsius)
//5.-----------------------------------------------------------------------------

let añoNacimiento= parseFloat(prompt("ingrese año de nacimiento"))
let añoActual= 2024

let edad= añoActual-añoNacimiento

console.log("la edad del usuario es: " + edad)
//6.-----------------------------------------------------------------------------

let nombre= (prompt("ingrese su nombre"))
let apellido= (prompt("ingrese su apellido"))

console.log("bienvenido: " + nombre , apellido)
//7.-----------------------------------------------------------------------------

let nota1= parseFloat(prompt("ingrese la primera nota (de 0 a 5)"))
let nota2= parseFloat(prompt("ingrese la segunda nota (de 0 a 5)"))
let nota3= parseFloat(prompt("ingrese la tercera nota (de 0 a 5)"))

let promedioNotas= (nota1+nota2+nota3) /3

console.log("el promedio de notas del estudiantes es: " + promedioNotas)*/
//8.-----------------------------------------------------------------------------
//Debo calcular el **salario semanal** de un empleado.
//  Pide el número de horas trabajadas en la semana y el precio que se paga por hora. Muestra el salario total.
let horasTrabajadas= parseFloat(prompt("ingrese el numero de horas trabajadas en la semana"))
let precioHora= parseFloat(prompt("ingrese el valor que se paga por hora"))

let salarioTotal= (horasTrabajadas*precioHora)

console.log("el salario total es: " + salarioTotal)