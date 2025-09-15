import DatosIncompletosError from "./DatosIncompletosError.js";
import EstadoInvalidoError from "./EstadoInvalidoError.js";
import Pedido from "./Pedido";
import Negocio from "./Negocio.js";

export default class GestorPedidos {

  #pedidos = [];
  #listaEspera = [];
  #reglasNegocio;



  constructor(pedidos = [], reglasNegocio) {

    this.#pedidos = pedidos;
    this.#reglasNegocio = reglasNegocio;
  }

  agregarPedido(pedido) {

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

  contadorPedidosPorCliente(cliente) {

    const self = this;

    return function () {
      const total = self.#pedidos.filter(pedido => pedido.cliente === cliente).length;
      return total;
    };
  };

  totalPedidos() {
    return this.#pedidos.length;
  }

  validarEntradaPedido(obj) {

    if (obj.id && obj.cliente && obj.producto) {

      const id = Number(obj.id);
      const cliente = String(obj.cliente);
      const producto = String(obj.producto);

      return new Pedido(id, cliente, producto);

    } else {
      throw new DatosIncompletosError();
    }

  }

  priorizarPedidos() {

    const alta = []
    const media = []
    const baja = []
    const neg = new Negocio();
    const pedi = this.#pedidos;

    pedi.forEach(element => {

      

    });


  }

}
