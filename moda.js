const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];


//   Creaamos un elemento vacio, para ir posteriormente elementos que se puedan evaluar con una función
  const lista1Count = {};

//   El metodo map nos permite recorrer el array
  lista1.map(
    // Cremos una fucion que con el elemento que agreguemos verifique si el elemento ya existe dentro de la lista
    function (elemento) {
      if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
      } else {
        lista1Count[elemento] = 1;
      }
    }
  );

// aqui con objet.entries le podemos enviar cualquier Objeto que queremos convertir en Array
const lista1Array = Object.entries(lista1Count).sort(
    // el metodo sort nos permite ordenar los elementos
    // la funcion nos permite comparar si el elementoA es mayor al elementoB
    function (elementoA, elementoB) {

        // Aqui podemos ver el metodo mas largo a resolver
        // If (elementoA > elementoB) return 1;
        // If (elementoA == elementoB) return 1;
        // If (elementoA < elementoB) return -1;

        // Hay que tener presente que el Array que se recibe y la posición de lo que queremos comparar
        // En caso de que de negativo significa que el elemento que llega es menor
        return elementoA[1] - elementoB[1];
    }
  );

//   La moda sera el ultimo elementos de la lista1Arraygit status
  const moda = lista1Array[lista1Array.length - 1];