// 3. Asincronía + Timers
// ●​ Simular la llegada de pedidos con setInterval: cada 3 segundos se agrega un
// pedido nuevo con un producto aleatorio.​
// ●​ Usar Promise.all para simular que 3 pedidos “en ruta” se entregan en paralelo
// después de tiempos distintos (setTimeout).​
// ●​ Si en cualquier momento hay más de 10 pedidos pendientes, mostrar un warning
// en consola:​
// "Demasiados pedidos sin asignar"​
import Pedido1 from './Pedido1';
import GestorPedidos1 from './GestorPedidos1';

const productos = ["casco", "manguera", "lápiz", "zapatilla", "camiseta"];
const clientes = ["Eugenia", "Agustin", "Walter", "Sonia", "Constanza"];

function llegadaPedidos() {

  const gestor = new GestorPedidos1;
  const ped = new Pedido1;

  setInterval(() => {


    gestor.agregarPedido(new ped())

  }, 3000);
}
