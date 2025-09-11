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

    const hayDuplicado = this.#pedidos.some(ped => ped === pedido);

    if (hayDuplicado) {

      throw new Error("Pedido duplicado");

    } else {
      this.#pedidos.push(pedido);
    }

  }

  agruparPorEstado() {

  }

  asignarPedidos(repartidores) {

  }

}
