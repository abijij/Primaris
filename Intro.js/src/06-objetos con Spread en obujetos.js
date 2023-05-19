//Comparar instancias y como clonar un obeto con una instancia  diferente a la original
//== compara si es igual , === si es identico se refiere que tenga los mismos varoles y el tipo de dato identico
// ... Spread es como new para Java es para crear un nuevo objeto esparciendo los datos de otro, seria esparcir o copiar cada atributo del original a otro completamente nuevo
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


// const invoice2 = invoice;
const invoice2 = {...invoice };

const result = invoice === invoice2;

if (result) {
    console.log(result);
}else {
    console.log(`No son iguales`);
}

invoice2.id = 333;

console.log(invoice.id);
console.log(invoice2.id);

