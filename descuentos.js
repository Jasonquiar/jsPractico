// const precioOriginal = 120;
// const descuento = 18;



function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    
    return precioConDescuento;
  }
  
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    

    // con el parametro innerText o InnerHTML podemos cambiar el texto interno de una etiqueda de HTML desde JS
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
  
  // Con consolo puedo imprimir en pantallas los objetos con sus  atributos
  // console.log({
  //   precioOriginal,
  //   descuento,
  //   porcentajePrecioConDescuento,
  //   precioConDescuento,
  // });


  //Aplicar descuento con cupon

  function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    
    return precioConDescuento;
  }
  
  function onClickButtonPriceDiscountCoupon() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    // //Solucion 1
    // //Utilizando switch para escoger desde un array de valores para que escoja 
    //     const coupons = [
    //         "JuanDC_es_Batman",
    //         "pero_no_le_digas_a_nadie",
    //         "es_un_secreto",
    //     ];

    //     let descuento;

    //     switch(couponValue) {
    //         case coupons[0]: // "JuanDC_es_Batman"
    //         descuento = 15;
    //         break;
    //         case coupons[1]: // "pero_no_le_digas_a_nadie"
    //         descuento = 30;
    //         break;
    //         case coupons[2]: // "es_un_secreto"
    //         descuento = 25;
    //         break;
    //     }

    
    // //Solucion 2
    // // Utilizando if se puede mejorar la legibilidad 
        // array.includes nos permite validar si un elemento ha sido almacenado en el array
    // if (!coupons.includes(couponValue)) {
    //     alert("El cupón " + couponValue + "no es válido");
    //  } else if (couponValue === "JuanDC_es_Batman") {
    //     descuento = 15;
    //  } else if (couponValue === "pero_no_le_digas_a_nadie") {
    //     descuento = 30;
    //  } else if (couponValue === "es_un_secreto") {
    //     descuento = 25;
    //  }

    // Solucion 3
    // Mejor solución para hacer el codido mas legible.
    // Creamos un array de objetos donde ponemos los cupones disponibles y su descuento correspondiente
    const coupons = [
        {
            name: "JuanDC_es_Batman",
            discount: 15,
        },
        {
            name: "pero_no_le_digas_a_nadie",
            discount: 30,
        },
        {
            name: "es_un_secreto",
            discount: 25,
        },
    ];

    //Verificamos que el cupon que escribio el usuario, sea valido en la información del array
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + couponValue + "no es válido");
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }

