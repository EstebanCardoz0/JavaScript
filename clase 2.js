// saludo();
// despedida();

function saludo() {
  console.log("Hola desde una declaracion");
}

const despedida = function () {
  console.log("Adios desde una expresion")
}

const calcularPrecio = (precio, impuestos = 0.21) => {
  const precioFinal = precio * (1 + impuestos);
  console.log(precioFinal);
}

// calcularPrecio(100);
// calcularPrecio(100, 0.10);

const user = {
  nombre: "Ana",
  saludos: ["Hola", "Que tal", "Que hacemo"],
  agradecer: function () {
    this.saludos.forEach(element => {
      console.log(`${element}, soy ${this.nombre}`);
    });
  }
}

// user.agradecer();

function perfil(nombre, ...hobbies) {
  console.log(`Hola, soy ${nombre} y mis hobbies son:`);
  hobbies.forEach(hobby => {
    console.log(`- ${hobby}`);
  });
}

// perfil("Esteban", ["Dormir", "Comer", "Jugar a la pelota"]);

const deportes = ["futbol", "voley", "tenis"];
const juegos = ["truco", "domino", "ajedrez"];

const actividades = [...deportes, ...juegos];

// console.log(actividades);

const libros = [
  { titulo: '1984', autor: 'George Orwell' },
  { titulo: 'El Señor de los Anillos', autor: 'J.R.R. Tolkien' },
  { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' }
];

for (let i = 0; i < libros.length; i++) {
  console.log(libros[i].titulo);
}
console.log("")
for (const libro of libros) {
  console.log(libro.titulo);
}

