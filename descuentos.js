const precioOriginal = 120;
const descuento = 18;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });
//

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;

}
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento son:$" + precioConDescuento;
}
const cupones = [
    "cupon_1",
    "cupon_2",
    "cupon_3",
];
function onClickButtonPriceDiscount2(){
    const inputPrice2 = document.getElementById("inputPrice2");
    const priceValue2 = inputPrice2.value;

    const inputCupon = document.getElementById("inputCupon");
    const cuponValue = inputCupon.value;

    let descuento;

    switch(cuponValue){
        case cupones[0]:
            descuento = 15;
            break;
        case cupones[1]:
            descuento = 30;
            break;
        case cupones[2]:
            descuento = 25;
            break
            
    }
    const precioConDescuentoCupon = calcularPrecioConDescuento(priceValue2,descuento);

    const ResultP_cupon = document.getElementById("ResultP_cupon");
    ResultP_cupon.innerText = "El precio con descuento son:$" + precioConDescuentoCupon;
}
