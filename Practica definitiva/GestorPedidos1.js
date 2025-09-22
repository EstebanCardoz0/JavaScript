import PedidoDuplicadoError from "./PedidoDuplicadoErros1";

export default class GestorPedidos1 {

  #pedidos;

  constructor() {
    this.#pedidos = [];
    this.listaDeEspera = []
  }

  agregarPedido(pedido) {

    const hayDuplicado = this.#pedidos.some(ped => ped.id === pedido.id);
    if (hayDuplicado) {
      throw new PedidoDuplicadoError("El pedido a agregar ya se encuentra en la lista");
    }
    this.#pedidos.push(pedido);
  }

  agruparPorEstado() {
    return {
      pendiente: this.#pedidos.filter(pen => pen.estado === "pendiente"),
      asignado: this.#pedidos.filter(pen => pen.estado === "asignado"),
      enRuta: this.#pedidos.filter(pen => pen.estado === "enRuta"),
      entregado: this.#pedidos.filter(pen => pen.estado === "entregado"),
      cancelado: this.#pedidos.filter(pen => pen.estado === "cancelado"),
    }
  }

  asignarPedidos(repartidores) {

    const listaPendientes = this.agruparPorEstado().pendiente;
    const pedidosPorRepartidor = {}
    for (const element of repartidores) {
      pedidosPorRepartidor[element] = 0;
    }



    for (let i = 0; i < listaPendientes.length; i++) {

      let indiceRepartidor = i % repartidores.length;

      if (pedidosPorRepartidor[repartidores[indiceRepartidor]] < 3) {
        listaPendientes[i].estado = "asignado";
        pedidosPorRepartidor[repartidores[indiceRepartidor]]++;
        console.log(`El pedido ${listaPendientes[i].id} fue asignado a ${repartidores[indiceRepartidor]}`)
      } else {
        this.listaDeEspera.push(listaPendientes[i])
      }
    }
  }
  
}