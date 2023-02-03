const RESPUESTA_AFIRMATIVA = 1;
const RESPUESTA_NEGATIVA = 0;

let frasePedirInicio = [
  "Algo de",
  "Un poco de",
  "quisiera"
];

let frasePedirFinal = [
  "por favor", "si pudieras",  
]

let respuestasNegativas = [
  "NO", "No señor", "Negativo", "Tu que crees"
]

let respuestasPositivas = [
  "Si", "Asi es", "lles sehr", "silbido afirmativo"
]
function generarNumeroRandom(valorLimite){
  return Math.round(Math.random() * valorLimite);
}

function leerTexto(texto){
    let oracion = crearOracion(texto);
    leerEnVozAlta(oracion);
    // speechSynthesis.speak(new SpeechSynthesisUtterance(oracion));
}

function darRespuestaRapida(respuesta){
  leerEnVozAlta(respuesta);
  // speechSynthesis.speak(new SpeechSynthesisUtterance(oracion));
}

function responderSiNo(respuesta){
  let frase;
  if(respuesta == RESPUESTA_AFIRMATIVA){
    frase = respuestasPositivas[generarNumeroRandom(respuestasPositivas.length-1)];
  }
  else{
    frase = respuestasNegativas[generarNumeroRandom(respuestasNegativas.length-1)];
  }

  leerEnVozAlta(frase);
}

function leerEnVozAlta(frase){
  speechSynthesis.speak(new SpeechSynthesisUtterance(frase));
}

function crearOracion(texto){
  fraseInicio = generarNumeroRandom(frasePedirInicio.length-1);
  fraseFinal = generarNumeroRandom(frasePedirFinal.length-1);

  return frasePedirInicio[fraseInicio] + " " + texto + " " + frasePedirFinal[fraseFinal];
}

console.log("Elementos frase inicial = " + frasePedirInicio.length);