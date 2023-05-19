// es Operador optional (?) nos permite si no exoste el compionente no tenga problemas al colocarlo y no marque un error 
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


console.log(invoice.company?.name)
console.log(invoice.client?.name)
//Forma antigua de hacer la validacion antes del operador Optional (?)
if (invoice.company !== undefined && invoic3e.company.name) {
    console.log(`pERFECTO`)
}else{
    console.log(`No existe la empresa`)
}

