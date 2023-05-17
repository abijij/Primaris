//Funcion de flecha => optimiza la manera de declarar funciones es igualmente conocidad como funciones lampda

// const sayHello =  (name = 'Antuan' , age = 0)  => {

//     const greeting = `Hola mundo esto es una funcion! ${name} edad ${age}`;
//     // console.log('Hola mundo esto es una funcion ');

//     return greeting;
// }
const sayHello =  (name = 'Antuan' , age = 0)  => `Hola mundo esto es una funcion! ${name} edad ${age}`;
const add =  (a = 0 , b= 0)  => a + b;
     

const result = sayHello('Edgar', 26);

console.log(result);
console.log(add(10, 5));