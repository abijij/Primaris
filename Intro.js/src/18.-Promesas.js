import  {InvoiceById} from  './Data/invoices'

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        const result = InvoiceById(3);
        console.log('Resultado' + JSON.stringify(result, null, 3))
        console.log('Realizando tarea con demora')
    }, 2500 );
});

