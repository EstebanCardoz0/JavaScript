import PedidoDuplicadoError from "./PedidoDuplicadoErros1";

export default class GestorPedidos1 {

  #pedidos;

  constructor() {
    this.#pedidos = [];
  }

  agregarPedido(pedido) {

    const hayDuplicado = this.#pedidos.some(ped => ped.id === pedido.id);
    if (hayDuplicado) {
      throw new PedidoDuplicadoError("El pedido a agregar ya se encuentra en la lista");
    }
    this.#pedidos.push(pedido);
  }
  //   ○ agruparPorEstado()
  // ● Devuelve un objeto con la forma: {
  // ● cancelado: [...],
  // ● asignado: [...],
  // ● enRuta: [...],
  // ● entregado: [...],
  // ● cancelado: [...]}

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

    for (let i = 0; i < listaPendientes.length; i++) {

      let indiceRepartidor = i % repartidores.length;

      listaPendientes[i].estado = "asignado";
      console.log(`El pedido ${listaPendientes[i].id} fue asignado a ${repartidores[indiceRepartidor]}`)

    }

  }
  // ■ Implementa un algoritmo round-robin que distribuya los pedidos pendientes entre repartidores.
  // ■ Si un repartidor recibe más de 3 pedidos en total, mover los pedidos excedentes a una lista de espera (listaEspera).


}