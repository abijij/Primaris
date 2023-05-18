//Objetos estan relacionados con un objeto JSON
//{}se crea los objetos con las llaves

const invoice = {
    id: 10,
    name: 'Compras de Oficina',
    date: new Date(),
    client: 'Fulgrim',
    total:  1000,
};
invoice.client = 'Magnus'
invoice.total = 5000,
console.log(invoice);