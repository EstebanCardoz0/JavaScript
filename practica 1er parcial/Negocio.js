export default class Negocio {

  #clientesVip = [];
  #productosLentos = [];

  constructor(clientesVip = [], productosLentos = []) {
    this.#clientesVip = clientesVip;
    this.#productosLentos = productosLentos;
  }

  getClientesVip() {
    return this.#clientesVip;
  }

  getProductosLentos() {
    return this.#productosLentos;
  }
}