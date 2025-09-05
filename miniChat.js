console.log("=== MINI CHAT ===");

const hablante1 = { 
  nombre: "Esteban",
  color: "\x1b[34m" // Azul
};
const hablante2 = { 
  nombre: "Pepito",
  color: "\x1b[32m" // Verde
};

const reset = "\x1b[0m"; // Reset color

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Closure para contar mensajes
const contadorMensajes = (() => {
  let contador = 0;
  
  return {
    incrementar: () => {
      contador++;
    },
    obtenerTotal: () => {
      return contador;
    }
  };
})();

function mostrarMensaje(hablante, mensaje) {
  const ancho = 50; // Ancho de la consola
  const textoMensaje = `${hablante.nombre}: ${mensaje}`;
  
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

function elegirHablante() {
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

function pedirMensaje(hablante) {
  rl.question("Escribe el mensaje: ", (mensaje) => {
    mostrarMensaje(hablante, mensaje);
    console.log("------------------------");
    
    // Volver a elegir quién habla
    elegirHablante();
  });
}

function terminarChat() {
  console.log("\n=== CHAT TERMINADO ===");
  console.log(`Total de mensajes enviados: ${contadorMensajes.obtenerTotal()}`);
  rl.close();
}

// Iniciar eligiendo quién habla primero
elegirHablante();
