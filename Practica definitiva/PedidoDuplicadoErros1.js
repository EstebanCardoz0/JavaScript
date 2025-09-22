export default class PedidoDuplicadoError1 extends Error {

  constructor(msje) {
    super(msje);
    this.name = "PedidoDuplicadoError";
  }
}