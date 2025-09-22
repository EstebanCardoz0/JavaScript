let numero;
// try {
// console.log(numero.toFixed(2));

// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
//   console.log(err.stack)
// }

// hacerQueAlgoFalla().then("aqui iria codigo por si sale todo bine").catch((err) => { console.log("el codigo falló", err) });

class negativeNumberError extends Error {

  constructor(msje) {
    super(msje);
    this.name = "negativeNumberError"
  }
}

export function sumar() { }
export function restar() { }
function operacionPredeterminada() { };
export default operacionPredeterminada;

const usuario = {
  nombre: "Alex",
  edad: 25,
  esEstudiante: true
}

// const usuarioJson = JSON.stringify(usuario);
// console.log(usuario);
// console.log(usuarioJson);
// console.log(typeof usuarioJson);
// console.log(typeof usuario);

const productoJSON = '{"nombre":"Laptop","precio":1200,"disponible":true}';
// const producto = JSON.parse(productoJSON);

// console.log(producto);
// console.log(typeof producto);

// fetch("https://rickandmortyapi.com/api/character/2")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('La respuesta de la red no fue correcta');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error("hubo un problema: " + error));

// async function obtenerPersonaje() {
//   try {
//     const respuesta = await fetch("https://rickandmortyapi.com/api/character/2");
//     const datos = await respuesta.json();
//     console.log(datos);
//   } catch (error) {
//     console.log("hubo un error: " + error);
//   }
// }

// obtenerPersonaje();


const miTimer = setTimeout(() => console.log("despues de dos segundos"), 2000);

console.log("el timer se creó id", miTimer);
clearTimeout(miTimer);
console.log("el timer se cancelo")
22450
63207
12194
16249