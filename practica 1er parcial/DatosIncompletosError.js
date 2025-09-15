export default class DatosIncompletosError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatosIncompletosError";
  }
}
