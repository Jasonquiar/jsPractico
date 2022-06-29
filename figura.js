//Codigo del cudrado

//console.group() y console.groupEnd() nos sieven para agrupar codigo en la consola
console.group("Cuadrado")

    // cost sirve para para declarar una constante
    // const ladoCuadrado= 5;
    // console.log("los lados del cuadrado miden: " + ladoCuadrado + " cm");

    // convertimos perimetro cuadrado en una funcion que reciba el lado que el usuario nos de para hacer el calculo
    function perimetroCuadrado(Lado) {
        return Lado * 4
        // console.log("El perimetro del cuadrado es: " + perimetroCuadrado +" cm");
    }
    
    //hacer las funciones nos ayudan a encapsular la idea logica
    // const areaCuadrado =ladoCuadrado * ladoCuadrado;
    // console.log("El area del cuadrado es: " + perimetroCuadrado +" cm²");
    function areaCuadrado(lado){
        return lado * lado
        // console.log("El area del cuadrado es: " + perimetroCuadrado +" cm²");
    }

console.groupEnd()

//Codigo del Triangulo
console.group("Triangulo")
    // const ladoTriangulo1 = 6;
    // const ladoTriangulo2 = 6;
    // const baseTriangulo= 4;
    // //identar nos sirve para reducir el largo del codigo sin perder el contexto que el mensaje pretende explicar()
    // console.log(
    //     "Los lados del triángulo miden: " 
    //     + ladoTriangulo1 
    //     + " cm, "
    //     + ladoTriangulo2 
    //     + " cm, "
    //     + baseTriangulo 
    //     +" cm" 
    //     );
    
    // const altutaTriangulo= 5.5;
    // console.log("la altura del triángulo es de:" + altutaTriangulo + " cm");
    
    // const perimetroTriangulo= ladoTriangulo1 + ladoTriangulo2+ baseTriangulo;
    // console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");
    
    function perimetroTriangulo(lado1, lado2, base){
        return lado1 + lado2+ base
    }
    // console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");
    
    // const areaTriangulo= (baseTriangulo*altutaTriangulo)/2;
    // console.log("El area del triángulo es: " + areaTriangulo + " cm²");
    

    function areaTriangulo(base,altura){
        return base *altura
    }

    // console.log("El area del triángulo es: " + areaTriangulo + " cm²");
console.groupEnd()
    

//Código del círculo
console.group("Circulos")
    // Radio
        // const radioCirculo = 4;
        // console.log("El radio del círculo es: " + radioCirculo + " cm");
    //Diametro

        function diametroCirculo(radio){
            return radio *2
        }
        // const diametroCirculo = radioCirculo * 2;
        // console.log("El diametro del circulo es: " + diametroCirculo + " cm");
    //PI
        // Math es una libreria con muchas herramientas matematicas que podemos utilizar y estan por defecto en js
        const PI = Math.PI;
        console.log("PI es: " + PI )
    //Circunferencia

        function perimetroCirculo(radio){
            const diametro = diametroCirculo(radio);
            return diametro * PI
        }
        // const perimetroCirculo = diametroCirculo * PI;
        // console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");
    // Area
        function areaCirculo(radio){
            return (radio * radio)* PI 
        }

        // const areaCirculo = (radioCirculo * radioCirculo) * PI;
        // console.log("El area del circulo es de:" + areaCirculo + " cm²");
console.groupEnd()

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro =perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Encontrar la altura del trialgulo
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;
        
        // la libreria de Math.sqrt nos permite utilizar raices cuadradas para calculo
        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}