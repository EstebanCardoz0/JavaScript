let num1=4
let num2=2

if(num1==num2){
  console.log("los numeros son iguales")
}else if(num1<num2){
  console.log("el numero "+num2+" es mayor")
}else{console.log("el numero "+num1+" es mayor")}

let fecha= new Date(2025,7,27)
switch (fecha.getDay()) {
  case 1:
    console.log("lunes")
    break;
  case 2:
    console.log("martes")
    break;
  case 3:
    console.log("miercoles")
    break;
  case 4:
    console.log("jueves")
    break;
  case 5:
    console.log("viernes")
    break;
  case 6:
    console.log("sabado")
    break;
  case 0:
    console.log("domingo")
    break;

  default:
    break;
}