import  {InvoiceById} from  './Data/invoices'

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        const result = InvoiceById(4);
        if (result) {
            resolve(result);
        }else{
            reject('No se encontro el id de la factura')
        }
        
    }, 2500 );
});

promise.then((result) => {
    console.log('Realizando una tarea con demora')
    console.log('Resultado: ' + JSON.stringify(result, null, 3))
}).catch((error) => {
    console.error(error)
})