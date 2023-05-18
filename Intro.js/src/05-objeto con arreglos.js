//Objetos con arreglos
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
    items : [
        {
            Primarca: 'Mortarion',
            godChaos: 'Nurgle',
            legion: 'Guardia de la muerte',
            planet: 'Barbarus',
            age: 800,
            CountLegion: 1000000,
        },
        {
            Primarca: 'Magnus',
            godChaos: 'Tzeentch ',
            legion: 'Los mil hijos',
            planet: 'Prospero',
            age: 100,
            CountLegion: 1000,
        },
        {
            Primarca: 'Angron',
            godChaos: 'Khorne ',
            legion: 'Deboradores de mundos',
            planet: 'Nuceria',
            age: 400,
            CountLegion: 2000000,
        },
    ],
    total:  function(){
        let total = 0;
        this.items.forEach(item => {
            total = total + item.age*item.CountLegion;
        });
        return total;
    },
    greeting: function(){
        return `Lupercal Lupercal Lupercal ${this.client.name}`
    }
};
//invoice.client.name = 'Magnus'
invoice.client.address.street = 'Cthonia';

console.log(invoice);

const greeting = invoice.greeting();
console.log(greeting);
console.log(`Total traidores: ${invoice.total()}`);