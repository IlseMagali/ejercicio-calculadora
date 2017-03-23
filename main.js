/*----- MOSTRAR NÚMEROS EN PANTALLA DE CALCULADORA ------*/
var calculo = "";
var arregloCalcular = "";
function mostrarNumero(valor){
  //var numero = document.getElementById("numeroUno").value;
  calculo = document.getElementById("operacionIngresada").value += valor;
  // este arreglo con el metodo substring me ayuda a obtener el signo para compararlo y ordenar una funcion de operacion
  arregloCalcular = calculo.substring(calculo.length - 1, calculo.length);
  console.log(calculo);
}
function operacionSuma(valorUno, valorDos){
  return valorUno + valorDos;

}

function operacionPorCalcular(){
  switch (arregloCalcular) {
    case 1:
      if (arregloCalcular === "+") {
        operacionSuma();
      }
      case 2:
        if (arregloCalcular === "-") {
          operacionResta();
        }

      break;
    default:

  }
}
