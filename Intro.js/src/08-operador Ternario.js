
// Operador ternario
const average = 5.6;
let status2 = ''
// Como implementar el operador ternario
status2 = (average >= 5.5) ? `Aprobado` : `Rechazado`;
console.log(`Resultado: ${status2}`);

 if(average >= 5.5) {
    status2 = `Aprobado`
    
 }else{
    status2 = `Reprobado`
 }
 console.log(`Resultado: ${status2}`);

 let max = 0;

 const a = 50;

 const b = 8;
 
 const c = 9;

 max = a > b ? a : b ;
 max = a > c ? a : c ;

 console.log(`El numero mayor es: ${max}`);
