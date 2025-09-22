
export default class Pedido1 {

  constructor(id, cliente, producto, estado = "pendiente") {

    this.id = id;
    this.cliente = cliente;
    this.producto = producto;
    this.estado = estado;
  }

  cancelar() {
    this.estado = "cancelado";
  }


}