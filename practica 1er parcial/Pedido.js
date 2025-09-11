class Pedido {


  constructor(id, cliente, producto, estado = "pendiente") {

    this.id = id;
    this.cliente = cliente;
    this.producto = producto;
    this.estado = estado
  }



  static estados = ["pendiente",
    "asignado",
    "en ruta",
    "entregado",
    "cancelado"];
}

Pedido.prototype.cancelar = function () {

this.estado="cancelado";

};