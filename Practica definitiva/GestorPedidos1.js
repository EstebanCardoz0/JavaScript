import PedidoDuplicadoError from "./PedidoDuplicadoErros1";
import DatosFaltantesError from "./DatosFaltantesError";

export default class GestorPedidos1 {

  #pedidos;
  #pedidosPorCliente;
  #clientesVip;
  #productosLentos;

  constructor() {
    this.#pedidos = [];
    this.listaDeEspera = [];
    this.#pedidosPorCliente = {};
    this.#productosLentos = [];
    this.#clientesVip = [];
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

  contadorPedidosPorCliente(cliente) {
    if (!this.#pedidosPorCliente[cliente]) {
      this.#pedidosPorCliente[cliente] = 0;
    }
    return () => {
      this.#pedidosPorCliente[cliente]++;
      return this.#pedidosPorCliente[cliente];
    };
  };

  totalPedidos() {
    return this.#pedidos.length;
  }

  validarEntradaPedido(obj) {

    if (!obj.id || !obj.cliente || !obj.producto) {
      throw new DatosFaltantesError("Falta uno o más datos");

    }

    const id = Number(obj.id);
    const cliente = String(obj.cliente);
    const producto = String(obj.producto);
    const estado = String(obj.estado);

  }

  priorizarPedidos() {

    const listaPedidos = this.#pedidos;

    let alta = [];
    let media = [];
    let baja = [];

    for (const element of listaPedidos) {
      if (this.#clientesVip.some(el => el === element.cliente)) {
        alta.push(element);
      } else {
        if (this.#productosLentos.some(len => len === element.producto)) {
          media.push(element);
        } else {
          baja.push(element);
        }

      }
    }

    let pedidosOrdenados = alta.concat(media.concat(baja));
    return pedidosOrdenados;

  }



}//final clase