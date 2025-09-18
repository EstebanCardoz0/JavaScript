function crearContador() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const contador = crearContador();

contador();
contador();
contador();
const contadorA = crearContador();
contadorA();
contadorA();
