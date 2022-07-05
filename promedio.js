//En la forma donde el Array sea algo ya definido 
// const lista1 = [
//     100,
//     200,
//     300,
//     500,
// ];

// let sumaLista1 = 0;

// for (let i= 0; i < lista1.length; i++){
//     sumaLista1 = sumaLista1 + lista1[i];
// }

// const promedioLista1 =sumaLista1/lista1.length


let lista = [];
//declaramos la variable lista con el array

//creamos la función que irá añadiendo los elementos a nuestro array
function añadirArray() {
  //obtenemos el dato del input  y convertimos ese dato a número
  const inputNumero = document.getElementById("inputNumber");
  const numero = Number(inputNumero.value);
  
  //ahora añadimos el número al array, y cada vez que el usuario
  const añadirNumero = lista.push(numero);
  
  //le de click al botón se irá añadiendo un número
  const resultado = document.getElementById("resultado");
  //mandamos a llamar el texto que queremos mostrar
  //imprimimos el texto en HTML
  resultado.innerText =
    "Estos son los numeros que has puesto en la lista (" +
    lista +
    ") si es correcto, presiona el botón 'Calcular Promedio'";
}


function calcularMediaAritmetica(lista) {

    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];
    // }
    
    // Nos permiter recibir del usuario diferentes valores y hacer el calculo
    // El metodo reduce recibe una función y esté nos retorna la suma de cada uno de los elementos que se reciben 
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    
    const promedioLista = sumaLista / lista.length;

    const resultado = document.getElementById("resultadoPromedio");
    resultado.innerText = "El promedio es " + promedioLista;
    // return promedioLista;
  }