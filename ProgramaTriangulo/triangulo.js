/* 
Un programa lee tres valores enteros. Los tres se interpretan como
representación de las longitudes de los lados de un triángulo. El programa imprime un mensaje
que indica si el triángulo es escaleno, isósceles o equilátero. Desarrolle un conjunto de casos
de prueba que crea que probarán este programa de manera adecuada.



Equilatero = todos los lados iguales
Escaleno = todos los lados diferentes 
Isosceles = dos lados iguales y un lado diferente.
*/


let ladoA = 20;
let ladoB = 60;
let ladoC = 30;
let nombreTriangulo = null;

function tipoDeTriangulo(ladoA,ladoB,ladoC){

    if ((ladoA==ladoB) && (ladoB==ladoC) && (ladoA==ladoC)){
        nombreTriangulo = "Equilatero";
    }

    if ((ladoA==ladoB) && (ladoB!=ladoC)){
        nombreTriangulo = "Isosceles";
    }

    if ((ladoB==ladoC) && (ladoB!=ladoA)){
        nombreTriangulo = "Isosceles";
    }

    if ((ladoC==ladoA)&&(ladoC!=ladoB)){
        nombreTriangulo = "Isosceles";
    }

    if ((ladoA!=ladoB)&&(ladoB!=ladoC)&&(ladoA!=ladoC)){
        nombreTriangulo = "Escaleno";
    }

    if (ladoA==0 || ladoB==0 || ladoC==0){
        nombreTriangulo= "No es un triangulo";
    }

    if (typeof(ladoA)=='string' || typeof(ladoB)=='string' || typeof(ladoC)=='string' ){

        nombreTriangulo = "No se admiten letras";
    }
    return nombreTriangulo;
}


