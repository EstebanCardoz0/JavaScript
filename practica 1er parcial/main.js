import Pedido from "./Pedido.js";
import GestorPedidos from "./GestorPedidos.js";

const gestor = new GestorPedidos();
const nombres = ["Carlos", "Cristian", "Romina", "Vanesa", "Mauricio"]

const productos = ["olla a presión", "celular", "pelota", "netbook", "zapatilla", "camiseta china", "air fryer", "especias", "licuadora", "heladera", "cocina"]


var contador = 0;

function crearPedido() {

  let id = contador++;
  const nombre = nombres[Math.floor(Math.random() * nombres.length)];
  const producto = productos[Math.floor(Math.random() * productos.length)];
  return new Pedido(id, nombre, producto);
}

console.log("Simulación iniciada: Se agregará un nuevo pedido cada 3 segundos.");

setInterval(() => {
  const nuevoPedido = crearPedido();
  gestor.agregarPedido(nuevoPedido);
  console.log(`Nuevo pedido agregado: ID ${nuevoPedido.id} (${nuevoPedido.producto} para ${nuevoPedido.cliente})`);

  if (gestor.agruparPorEstado().pendiente.length > 10) {
    console.log("demasiados pedidos sin asignar")
  }

}, 3000);


setInterval(() => {
  console.log("iniciando ciclo de operaciones");

  gestor.asignarPedidos(nombres)
  const asignados = gestor.agruparPorEstado().asignado;
  const tresPrimeros = asignados.slice(0, 3);
  tresPrimeros.forEach(element => element.estado = "enRuta");

const arrayPromesas = tresPrimeros.map(pedido => entregarPedido(pedido));


  Promise.all(arrayPromesas).then((resultados) => {
  console.log("los tres pedidos se han entregado");
  console.log("pedidos entregados: ", resultados);
})
  .catch((error) => {
    console.error("uno o más pedidos no fueron entregados", error);
  });

}, 10000);

function entregarPedido(pedidoRuta) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      pedidoRuta.estado = "entregado";
      resolve(pedidoRuta);

    }, 2000);
  })
}











