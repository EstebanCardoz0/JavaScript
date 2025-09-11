class EstadoInvalidoError extends Error {

  constructor(mensaje) {
    super(mensaje);
    this.name = "EstadoInvalidoError"
  }
  
}