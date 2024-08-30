//Crear el aviso

// let aviso = document.createElement("div");
// aviso.classList.add("alert","alert-warning","alert-dismissible","fade", "show");
// aviso.role = "alert";

//Crear el boton

// let botonAviso = document.createElement("button");
// botonAviso.classList.add("btn-close");
// botonAviso.type = "button";
// botonAviso.setAttribute("data-bs-dismiss", "alert");
// botonAviso.setAttribute("aria-label", "Close");





// Programa para saber si un número es par o impar
let entrada = document.getElementById("entradaNumero");
let salida = document.getElementById("salidaNumero");

document.getElementById("boton").addEventListener("click", function () {
  if (entrada.value % 2 === 0) {
    salida.value = `El numero "${entrada.value}" es par.`;
    // aviso.innerText = `El numero "${entrada.value}" es par.`;
    // aviso.appendChild(botonAviso);
    // document.getElementById("salidaPar").appendChild(aviso);

  } else {
    salida.value = `El numero "${entrada.value}" es impar.`;
    // aviso.innerText = `El número "${entrada.value}" es impar.`;
    // aviso.appendChild(botonAviso);
    // document.getElementById("salidaPar").appendChild(aviso);

  }
  entrada.value = ''
})



// Programa para saber si una letra es vocal o consonante, mayúscula o minúscula
let entradaLetra = document.getElementById("entradaLetra");
let salidaLetra = document.getElementById("salidaLetra");
const vocales = ["a", "e", "i", "o", "u"];
const regex = /[a-zA-Z]/;

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
      salidaLetra.value = `La letra "${letra}" es una ${isCaps(letra) ? "vocal mayúscula" : "vocal minúscula"}.`;
    } else {
      salidaLetra.value = `La letra "${letra}" es una ${isCaps(letra) ? "consonante mayúscula" : "consonante minúscula"}.`;
    }
  } else {
    salidaLetra.value = `Por favor solo introduce letras.`;
  }

  entradaLetra.value = "";

})


// Construya un programa que calcule el costo de internación de un cliente, según los datos de la siguiente tabla. 
// Se sabe que los clientes mayores de 60 años tienen un descuento del 25% y los clientes menores de 25 años, de 15%.
let tratamiento = document.getElementById('seleccion');
let precio = document.getElementById('cotizacion');
let botonCotizar = document.getElementById('cotizar');
let entradaEdad = document.getElementById("edad");
let planes = {
  "platino": 28800,
  "oro": 25000,
  "plata": 19500,
  "bronce": 11500
}


for (let [plan, precio] of Object.entries(planes)) {
  let opcion = document.createElement('option');
  opcion.value = plan;
  opcion.text = `Plan ${plan.charAt(0).toLocaleUpperCase()}${plan.slice(1)} - $${precio}`;
  tratamiento.append(opcion);
}


botonCotizar.addEventListener('click', function boton() {

  if (tratamiento.value != '' && entradaEdad.value != '') {
    let plan = tratamiento.value;
    let edad = entradaEdad.value;
    let seleccion = planes[plan];

    if (edad >= 60) {

      let descuento = 0.75;
      precio.value = `El plan ${plan} tiene un valor de ${seleccion} y con un descuento de ${(1 - descuento) * 100}% queda en $${(seleccion * descuento)}`;

    } else if (edad <= 25) {

      descuento = 0.85;
      precio.value = `El plan ${plan} tiene un valor de $${(seleccion * descuento)}`;

    } else {

      precio.value = `El plan ${plan} tiene un valor de $${seleccion}`;

    }

  } else {

    precio.value = "Debe introducir su edad y seleccionar una opción de tratamiento.";

  }

})



//Hacer un programa que imprima el nombre de un artículo, clave, precio original y su precio con descuento. 
//El descuento lo hace en base a la clave, si la clave es 1 el descuento es del 10%
// y si la clave es 2 el descuento es del 20% (solo existen dos claves).









for(let i=0 ; i<=3; i++){
  //crear formulario
  let formulario = document.createElement("form");
  let numeroId = `formulario${i+1}`
  formulario.setAttribute("id", numeroId)
  //Agregar las clases al formulario
  formulario.classList.add("col-sm-8", "col-md-5", "col-xl-3", "mt-5", "mx-3", "border", "border-1", "rounded-3", "p-5", "tarjeta", "d-flex", "flex-column", "justify-content-center");
  //crear titulo
  let titulo = document.createElement("p");
  titulo.innerText = "Título";
  titulo.setAttribute("id", "titulo1")
  titulo.classList.add("text-center");
  //Agregar titulo
  formulario.appendChild(titulo);
  //Crear primer div que contiene el label y el input
  let div1 = document.createElement("div");
  div1.classList.add("mb-3");
  //Crear el label
  let label1 = document.createElement("label");
  label1.innerText = "Introduce ______:";
  let entradaAtr = `entrada${i+1}`
  label1.setAttribute("for", entradaAtr);
  label1.classList.add("form-label");
  //Crear el input
  let input1 = document.createElement("input");
  input1.type = "number";
  input1.classList.add("form-control");
  input1.setAttribute("id", entradaAtr);
  //Agregar el label
  div1.appendChild(label1);
  div1.appendChild(input1);
  //Agregar primer div
  formulario.appendChild(div1);


  //Crear segundo div que contiene el label y el input
  let div2 = document.createElement("div");
  div2.classList.add("mb-3");
  //Crear el label
  let label2 = document.createElement("label");
  label2.innerText = "Introduce ______:";
  let salidaAtr = `salida${i+1}`
  label2.setAttribute("for", salidaAtr);
  label2.classList.add("form-label");
  //Crear el inpu2
  let input2 = document.createElement("input");
  input2.type = "number";
  input2.classList.add("form-control");
  input2.setAttribute("id", salidaAtr);
  input2.setAttribute("disabled", '');
  //Agregar el label
  div2.appendChild(label2);
  div2.appendChild(input2);
  //Agregar primer div
  formulario.appendChild(div2);
  //Agregar el formulario al contenedor
  document.getElementById("contenedor").append(formulario);



  //Crear el boton
  let boton = document.createElement("button")
  let botonNumerado = `boton${i+1}`
  boton.type = "button"
  boton.classList.add("btn", "btn-primary")
  boton.setAttribute("id",botonNumerado)
  boton.innerText = "Calcular"
  formulario.appendChild(boton)


}


