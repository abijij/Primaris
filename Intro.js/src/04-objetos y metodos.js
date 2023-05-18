//Un objeo compuesto de otro onjeto asi se va modularisando
//Al ocupar una funcion de => flecha no sirve el this. hace que sea una funcion del objeto propio
const invoice = {
    id: 10,
    name: 'Compras de Oficina',
    date: new Date(),
    client: {
        id:2,
        name: 'Horus',
        lastname: 'Lupercal',
        age: 700,
        address: {
            street: 'Terra',
            number: 22,
        }
    },
    total:  1000,
    greeting: function(){
        return `Lupercal Lupercal Lupercal ${this.client.name}`
    }
};
//invoice.client.name = 'Magnus'
invoice.client.address.street = 'Cthonia';
invoice.total = 5000;
console.log(invoice);

const greeting = invoice.greeting();
console.log(greeting);