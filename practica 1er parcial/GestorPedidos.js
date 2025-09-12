class GestorPedidos {

  #pedidos = [];

  constructor(pedidos) {

    this.#pedidos = pedidos;
  }

  //se podria usar la funcion some
  agregarPedido(pedido) {

    // this.#pedidos.forEach(element => {
    //   if (pedido.id === element.id) {
    //     throw new Error("Pedido duplicado");
    //   }
    // });

    const hayDuplicado = this.#pedidos.some(ped => ped.id === pedido.id);

    if (hayDuplicado) {

      throw new Error("Pedido duplicado");

    } else {
      this.#pedidos.push(pedido);
    }

  }

  agruparPorEstado() {

    return {
      pendiente: this.#pedidos.filter(ped => ped.estado === "pendiente"),
      asignado: this.#pedidos.filter(ped => ped.estado === "asignado"),
      enRuta: this.#pedidos.filter(ped => ped.estado === "enRuta"),
      entregado: this.#pedidos.filter(ped => ped.estado === "entregado"),
      cancelado: this.#pedidos.filter(ped => ped.estado === "cancelado")
    };

  }

  asignarPedidos(repartidores) {

  }

}
