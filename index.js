// arreglo que va a contener las respuestas correctas

let correctas = [2, 3, 3];
//donde se guarda lo que coloque el usuario

let opcion_elegida = [];
let cantidad_correctas=0;

//funcion que toma el numero de pregunta y el input elegido de esa persona

function respuesta(num_pregunta, seleccionada) {
  //gaurdo la respuesta elegidaopcion
  opcion_elegida[num_pregunta] = seleccionada.value;
  //el siguiente codigo es para poner color blanco
  //el fondo de los inpues para cuando elige otra opcion
  //armo id para seleccionar el section correspondiente
  id= "p"+ num_pregunta;
  labels = document.getElementById(id).childNodes;
  labels[3].style.backgroundColor = "white";
  labels[5].style.backgroundColor = "white";
  labels[7].style.backgroundColor = "white";
  //doy color l label elecionado
  seleccionada.parentNode.style.backgroundColor = "#71d37e";
}
//FUNCION QUE COMPARA PARA SABER CUANTAS FUERON CORRECTAS
function corregir () {
  cantidad_correctas = 0;
  for (i = 0; i < correctas.length; i++) {
    if(correctas[i] == opcion_elegida[i]) {
      cantidad_correctas++;
    }
  }
  document.getElementById("resultado").innerHTML = cantidad_correctas;
}
