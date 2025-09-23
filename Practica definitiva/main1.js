
// ●​ Usar Promise.all para simular que 3 pedidos “en ruta” se entregan en paralelo
// después de tiempos distintos (setTimeout).​
// ●​ Si en cualquier momento hay más de 10 pedidos pendientes, mostrar un warning
// en consola:​
// "Demasiados pedidos sin asignar"​
import Pedido1 from './Pedido1';
import GestorPedidos1 from './GestorPedidos1';

const productos = ["casco", "manguera", "lápiz", "zapatilla", "camiseta"];
const clientes = ["Eugenia", "Agustin", "Walter", "Sonia", "Constanza"];

function contador() {
  let contador = 0;
  return function aumentar() {
    let aum = contador++;
    return aum;
  }
}

const gestor = new GestorPedidos1;

function llegadaPedidos() {

  setInterval(() => {


    const cli = clientes[Math.floor((Math.random()) * clientes.length)];
    const pro = productos[Math.floor((Math.random()) * productos.length)];

    gestor.agregarPedido(new Pedido1(contador()(), cli, pro))

    if (gestor.agruparPorEstado().pendiente.length >= 10) {
      console.warn("⚠️ Demasiados pedidos sin asignar");
    }

  }, 3000);
}

const cli1 = clientes[Math.floor((Math.random()) * clientes.length)];
const pro1 = productos[Math.floor((Math.random()) * productos.length)];
const cli2 = clientes[Math.floor((Math.random()) * clientes.length)];
const pro2 = productos[Math.floor((Math.random()) * productos.length)];
const cli3 = clientes[Math.floor((Math.random()) * clientes.length)];
const pro3 = productos[Math.floor((Math.random()) * productos.length)];
const ruta1 = gestor.agregarPedido(new Pedido1(contador()(), cli1, pro1, "enRuta"))
const ruta2 = gestor.agregarPedido(new Pedido1(contador()(), cli2, pro2, "enRuta"))
const ruta3 = gestor.agregarPedido(new Pedido1(contador()(), cli3, pro3, "enRuta"))

function promesa1(pedido, tiempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      pedido.estado = "entregado";
      resolve(pedido);
    }, tiempo);
  });
};

let promesas = [promesa1(gestor.agruparPorEstado().enRuta[0], 3000), promesa1(gestor.agruparPorEstado().enRuta[1], 1000), promesa1(gestor.agruparPorEstado().enRuta[2], 2000)];

Promise.all(promesas).then(() => console.log("Tres pedidos pasaron de 'En Ruta' a 'Entregado'")).catch(() => console.log("Algo salio mal"))
