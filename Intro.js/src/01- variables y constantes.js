
let name = 'Edgar'; // let te pemite crear una vriable que puede cambiar

name = 'Antuan';

const lastname = 'Gutierrez'; // valores que no van a cambiar o renombrar

const condicion = true;

if (condicion) {
    
    const  lastname  = 'Gabriela';
    console.log(lastname)
}


//interpolar cambiar el valor de una variable por medio de un template
// `` con las comillas invetidas al declar el string las variables se tienen que declarar entre ${} aparte esta forma de declaracion nos permite respertar los saltos de linea
console.log('Hola mundo ' + name + ' ' +lastname);

console.log(`Hola mundo  
${name} 
${lastname}`);