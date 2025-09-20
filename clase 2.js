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

// for (let i = 0; i < libros.length; i++) {
//   console.log(libros[i].titulo);
// }
// console.log("")
// for (const libro of libros) {
//   console.log(libro.titulo);
// }

// console.log("mensaje 1");

function miCallBack() {
  console.log("mensaje 2");
}

function operacionSincronica(callback) {
  callback();
  console.log("mensaje 3");
}

function operacionAsincronica(callback) {
  setTimeout(function () {
    callback();
    console.log("mensaje 4");
  }, 1000);
}

// operacionSincronica(miCallBack);
// operacionAsincronica(miCallBack);

// console.log("mensaje 5");

const animal = {
  tipo: "mamifero",
  respirar: function () {
    console.log("Estoy respirando");
  }
}

const perro = Object.create(animal);
perro.nombre = "Tobi";

// perro.respirar();
// console.log(perro.nombre);
// console.log(perro.tipo);

animal.comer = function () { console.log("el animal come") };
perro.comer = function () { console.log("el perro come"); Object.getPrototypeOf(this).comer.call(this) };

// perro.comer();

class figura {

  constructor() {
    this.area = 0;
  }
}

class cuadrado extends figura {

  lado;

  constructor(lado) {
    super();
    this.lado = lado;
  }
  area() {
    return this.lado * this.lado;
  }
}

class rectangulo extends cuadrado {

  constructor(lado, ancho) {
    super(lado);
    this.ancho = ancho;
  }

  area() {
    return this.lado * this.ancho;
  }
}

// console.log("inicio");
// setTimeout(() => console.log("temporizador 1"), 0);
// Promise.resolve().then(() => console.log("promesa"));
// setTimeout(() => console.log("temporizador 2"), 0)
// console.log("fin");

console.log("inicio")
const miPromesa = new Promise((resolve, reject) => {
  console.log("ejecutando promesa");
  resolve("ejecutada con exito");
});

miPromesa.then(resultado => {
  console.log(resultado);
});

console.log("fin");