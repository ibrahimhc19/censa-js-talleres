


// Programa para saber si un número es par o impar
let entrada = document.getElementById("entradaNumero");
let salida = document.getElementById("salidaNumero");

document.getElementById("boton").addEventListener("click", function () {
  if (entrada.value % 2 === 0) {
    salida.value = `El numero "${entrada.value}" es par.`;
  } else {
    salida.value = `El número "${entrada.value}" es impar.`;
  }
  entrada.value = ''
})




// Programa para saber si una letra es vocal o consonante, mayúscula o minúscula
let entradaLetra = document.getElementById("entradaLetra");
let salidaLetra = document.getElementById("salidaLetra");
const vocales = ["a", "e", "i", "o", "u"];
const regex = /[a-zA-Z]/

function isCaps(letra) {
  return letra === letra.toUpperCase();
}

function isVowel(letra) {
  return vocales.includes(letra.toLowerCase());
}

document.getElementById("botonLetra").addEventListener("click", function () {
  const letra = entradaLetra.value;

  if (regex.test(letra)) {

    if (isVowel(letra)) {
      salidaLetra.value = `La letra "${letra}" es una ${isCaps(letra) ? "vocal mayúscula" : "vocal minúscula"}.`
    } else {
      salidaLetra.value = `La letra "${letra}" es una ${isCaps(letra) ? "consonante mayúscula" : "consonante minúscula"}.`
    }
  } else {
    salidaLetra.value = `Por favor solo introduce letras.`
  }

  entradaLetra.value = ""

})


// Construya un programa que calcule el costo de internación de un cliente, según los datos de la siguiente tabla. 
// Se sabe que los clientes mayores de 60 años tienen un descuento del 25% y los clientes menores de 25 años, de 15%.
let tratamiento = document.getElementById('seleccion');
let precio = document.getElementById('cotizacion')
let botonCotizar = document.getElementById('cotizar')

let planes = new Map();
planes.set("platino", "28.000")
planes.set("oro", "25.000")
planes.set("plata", "19.500")
planes.set("bronce", "11.500")


botonCotizar.addEventListener('click', function boton(){
  console.log(planes.get(tratamiento.value))
})