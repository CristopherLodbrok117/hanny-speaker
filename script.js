

let frasePedirInicio = [
  "Algo de",
  "Un poco de",
  "quisiera"
];

let frasePedirFinal = [
  "por favor", "si pudieras",  
]

const TOTAL_FRASE_INICIAL = 3;
const TOTAL_FRASE_FINAL = 2;

function generarNumeroRandom(valorLimite){
  return Math.round(Math.random() * valorLimite);
}

function leerTexto(texto){
    let oracion = crearOracion(texto);
    speechSynthesis.speak(new SpeechSynthesisUtterance(oracion));
}

function crearOracion(texto){
  fraseInicio = generarNumeroRandom(TOTAL_FRASE_INICIAL-1);
  fraseFinal = generarNumeroRandom(TOTAL_FRASE_FINAL-1);

  return frasePedirInicio[fraseInicio] + " " + texto + " " + frasePedirFinal[fraseFinal];
}