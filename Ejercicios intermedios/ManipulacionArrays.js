var numeros =[1, 2, 3, 4, 5];
function sumaArray(array){
    suma = 0;
    array.forEach(numero => {
        suma += numero;

    });
    console.log(suma);
}
sumaArray(numeros)