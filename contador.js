// Closure para contar mensajes
export const contadorMensajes = (() => {
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
