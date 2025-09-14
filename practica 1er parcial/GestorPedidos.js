export default
class GestorPedidos {

  #pedidos = [];
  #listaEspera = [];

  

  constructor(pedidos=[]) {

    this.#pedidos = pedidos;
  }

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

    const pendientes = this.agruparPorEstado().pendiente;

    const asignaciones = {};

    repartidores.forEach(repartidor => {

      asignaciones[repartidor] = 0;
    });

    pendientes.forEach((pedido, indice) => {

      const indiceRepartidor = indice % repartidores.length;
      const repartidorAsignado = repartidores[indiceRepartidor];

      if (asignaciones[repartidorAsignado] >= 3) {
        this.#listaEspera.push(pedido);

      } else {


        console.log(`Se asignó el pedido ${pedido.id} al repartidor ${repartidorAsignado}`);
        asignaciones[repartidorAsignado]++;
        pedido.estado = "asignado";
      }
    });

  }

}
