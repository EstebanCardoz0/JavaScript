export default class DatosFaltantesError extends Error {

  constructor(msje) {
    super(msje);
    this.name("DatosFaltantesError")
  }
}
