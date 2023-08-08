import invoiceFindByClientName, {Angron,invoices} from  './Data/invoices'

const invoicesName = invoices.map(i => i.name)

console.log(invoicesName)
console.log(invoices)

const invoicesClient = invoices.map(i => i.client.lastname)
console.log(invoicesClient)

const invoiceFindById = invoices.find( i=> i.id === 2)
console.log(invoiceFindById)

console.log("Buscar factura por nombre del cliente")
console.log(invoiceFindByClientName('Horus'));

const invoiceFilter = invoices.filter( i => i.id > 1)
console.log(invoiceFilter)

console.log("Filter eliminar")
const invoiceDelete = invoices.filter( i => i.id  != 2)
console.log(invoiceDelete)

const invoiceFilter2 = invoices.filter( i => i.items.includes(Angron) )
console.log(invoiceFilter2)

const result = invoices.some(i=> i.client.name === 'Horus')
console.log(result)