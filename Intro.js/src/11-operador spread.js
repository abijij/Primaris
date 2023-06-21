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
 const  products2 = products.concat(`Pantalla`, `Multi cargador`) ;// concat crea una nnueva instancia mienntras tyanto pushh los agrega al arreglo

const fruits = [`Peras`, `Manzanas`, `Sandias`,  `Freas` ];

const market = [...products2, ...fruits, `Lechuga`, `Papas`, `Uvas`];

const market2 = products2. concat(fruits).concat(`Lechuga`, `Papas`, `Uvas`);

console.log(products);

console.log(products2);

console.log(fruits);

console.log(market);
