// Helpers
    // Con esta funcion verificamos que el numero que entra es par o no retornando negativo o positivo
    function esPar(numerito) {
        return (numerito % 2 === 0);
    }
    //Estas lineas de codigo ya las habiamos escrito en el archivo mediana.js
    function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    }
  
// Calculadora de mediana
    function medianaSalarios(lista) {
    //El metodo parseInt convierte el resultante en un numero entero y verificamos si la lista es impar
        const mitad = parseInt(lista.length / 2);
        if (esPar(lista.length)) {
            //Caso donde la lista sea par
            const personitaMitad1 = lista[mitad - 1];
            const personitaMitad2 = lista[mitad];
            const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
            return mediana;
        } else {
            //Este es el caso de que la lista sea impar
            const personitaMitad = lista[mitad];
            return personitaMitad;
        }
    }

// Mediana General
    // Creamos un array con el metodo .map con la lista de los salarios de colombia de la hoja salarios.js
    const salariosCol = colombia.map(
        function (personita) {
            return personita.salary;
        }
    );
    //Asi organizamos la el Array
    const salariosColSorted = salariosCol.sort(
        function (salaryA, salaryB) {
            return salaryA - salaryB;
        }
    );
    const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
    //Con esto sacamos el splice con una regla de 3 encontrando la posicion en el array despues del 90 %
    const spliceStart = (salariosColSorted.length * 90) / 100;
    const spliceCount = salariosColSorted.length - spliceStart;

    // El metodo splice nos permiter sacar de un array una parte del arreglo, el primer atributo es sobre donde
    // inicia el corte y el segunto atributo es la cantidad de elementos que se van a tomar de la lista
    const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
    );

    const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
medianaGeneralCol,
medianaTop10Col,
});