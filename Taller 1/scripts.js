


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
    salidaLetra.value = `Por favo solo introduce letras.`
  }

  entradaLetra.value = ""

})


// Programa para saber si una letra es vocal o consonante, mayúscula o minúscula