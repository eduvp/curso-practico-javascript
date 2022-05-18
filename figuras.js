console.log("hello world");
//Codigo del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

 function areaCuadrado(lado){
     return lado * lado;
 }


//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triangulo miden: " 
// + ladoTriangulo1 + "cm, " 
// + ladoTriangulo2 + "cm, " 
// + baseTriangulo + "cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo mide: " + alturaTriangulo + "cm");

// const perimetroTriangulo =  ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areaTriangulo + "cm2");
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 +base;
}
function areaTriangulo(base, altura){
    return (base * altura)/2;
}
console.groupEnd();

//Código de círculo
console.group("Circulo");
// const radioCirculo = 4;
// console.log("El radio del Circulo es: " + radioCirculo + "cm");

// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del Circulo es: " + diametroCirculo + "cm");

const PI = Math.PI;
console.log("El PI es: " + PI);

// const perimetroCirculo = PI * diametroCirculo;
// console.log("El perimetro del Circulo es: " + perimetroCirculo + "cm");

// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del Circulo es: " + areaCirculo + "cm2");
 function diametroCirculo(radio){
     return radio * 2;
 }

 function perimetroCirculo(radio){
     const diametro = diametroCirculo(radio);
     return diametro * PI;
 }
 
 function areaCirculo(radio){
     return (radio*radio)*PI;
 }
console.groupEnd();
//cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);

}
//circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const perimetro = perimetroCirculo(value);
    alert(perimetro);

}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const area = areaCirculo(value);
    alert(area);

}
//triangulo
function calcularAreaTriangulo(){
    const input = document.getElementById("baseTriangulo"); 
    const input2 = document.getElementById("alturaTriangulo");   
    const value1 = input.value;
    const value2 = input2.value;

    
    const area = areaTriangulo(value1,value2);
    alert(area);

}