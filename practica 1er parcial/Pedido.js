import EstadoInvalidoError from "./EstadoInvalidoError.js";
export default
  class Pedido {



  constructor(id, cliente, producto, estado = "pendiente") {

    this.id = id;
    this.cliente = cliente;
    this.producto = producto;


    const estadoValido = Pedido.estados.includes(estado);
    if (!estadoValido) {
      throw new EstadoInvalidoError(`El estado "${estado}" no es válido`);
    }

    this.estado = estado;
  }



  static estados = ["pendiente",
    "asignado",
    "enRuta",
    "entregado",
    "cancelado"];
}

Pedido.prototype.cancelar = function () {

  this.estado = "cancelado";

};