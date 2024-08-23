


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
const vocales = ["a", "e", "i", 'o', 'u'];

document.getElementById("botonLetra").addEventListener("click", function () {

for (let letra of vocales){
  if(entradaLetra.value == letra){
    salidaLetra.value = `La letra "${entradaLetra.value}" es una vocal.`;
    break;
  } else{
    salidaLetra.value = `La letra "${entradaLetra.value}" es una consonante.`;
    break;
  }
}
entradaLetra.value = '';

})

