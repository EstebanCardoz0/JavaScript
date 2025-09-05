import { hablante1, hablante2, reset } from './usuarios.js';
import { contadorMensajes } from './contador.js';
import readline from 'readline';

// Crear interfaz readline
export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function mostrarMensaje(hablante, mensaje) {
  const ancho = 70; // Ancho de la consola (aumentado para la fecha)
  const ahora = new Date();
  const fecha = ahora.toLocaleDateString();
  const hora = ahora.toLocaleTimeString();
  const textoMensaje = `${hablante.nombre}: ${mensaje} [${fecha} ${hora}]`;
  
  if (hablante.nombre === "Esteban") {
    // Alineado a la izquierda
    console.log(hablante.color + textoMensaje + reset);
  } else {
    // Alineado a la derecha
    const espacios = " ".repeat(Math.max(0, ancho - textoMensaje.length));
    console.log(espacios + hablante.color + textoMensaje + reset);
  }
  
  // Incrementar contador
  contadorMensajes.incrementar();
}

export function elegirHablante() {
  console.log("\n¿Quién va a hablar?");
  console.log("1 - Esteban");
  console.log("2 - Pepito");
  console.log("3 - Salir");
  
  rl.question("Elige (1, 2 o 3): ", (opcion) => {
    if (opcion === "1") {
      pedirMensaje(hablante1);
    } else if (opcion === "2") {
      pedirMensaje(hablante2);
    } else if (opcion === "3") {
      terminarChat();
    } else {
      console.log("Opción inválida, elige 1, 2 o 3");
      elegirHablante();
    }
  });
}

export function pedirMensaje(hablante) {
  rl.question("Escribe el mensaje: ", (mensaje) => {
    mostrarMensaje(hablante, mensaje);
    console.log("------------------------");
    
    // Volver a elegir quién habla
    elegirHablante();
  });
}

export function terminarChat() {
  console.log("\n=== CHAT TERMINADO ===");
  console.log(`Total de mensajes enviados: ${contadorMensajes.obtenerTotal()}`);
  rl.close();
}
