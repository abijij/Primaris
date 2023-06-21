//Arreglos
//El areglo siempre tiene un indice que empieza en 0
//Forma clasica de agregar elementos
const products = [
    `Mesa`,
    `Teclado`,
    `Mouse`,
    `Laptop`,
    `Silla`,
];
//Forma dinamica seria en un loop con un for esta es la forma de uno en uno con push agregando elementos al arreglo
 products.push(`Pantalla`, `Multi cargador`) ;





//forma de agregar elemtos con un forEach
//Este es metodo de referencia
products.forEach( (el=> console.log(el)));

for(const prod of products){
    console.log(prod);
}

for (let i = 0; i < products.length; i++) {
    const element = products[i];
    console.log(element)
    
}
//Forma de ver que elemnto trae en queposicion
console.log(products[4])
