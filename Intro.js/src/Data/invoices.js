 const Angron ={
    Primarca: 'Angron',
    godChaos: 'Khorne ',
    legion: 'Deboradores de mundos',
    planet: 'Nuceria',
    age: 400,
    CountLegion: 2000000,
}


 const invoices =[
    {
     id: 1,
     name: 'Compras de Oficina',
     date: new Date(),
     client: {
         name: 'Horus',
         lastname: 'Lupercal',
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
         Angron,
     ]
     
   },
   {
     id: 2,
     name: 'Compras de Casa',
     date: new Date(),
     client: {
         name: 'Horus',
         lastname: 'Lupercal',
         address: {
             street: 'Terra',
             number: 22,
         }
     },
     items : [
         {
             Primarca: 'Leon',
             godChaos: 'No',
             legion: 'Angeles Oscuros',
             planet: 'Kaliban',
             age: 10000,
             CountLegion: 34234,
         },
         {
             Primarca: 'Guilliman',
             godChaos: 'No ',
             legion: 'Ultra marines',
             planet: 'Mackree',
             age: 10049,
             CountLegion: 534534,
         },
         {
             Primarca: 'Rogal',
             godChaos: 'No ',
             legion: 'Puños impreirales',
             planet: 'Terra',
             age: 700,
             CountLegion: 20000234200,
         },
     ]
     
   },
   {
     id: 3,
     name: 'Compras de Negocio',
     date: new Date(),
     client: {
         name: 'Horus',
         lastname: 'Lupercal',
         address: {
             street: 'Terra',
             number: 22,
         }
     },
     items : [
         {
             Primarca: 'Alfarius',
             godChaos: 'Cavala',
             legion: 'Legion Alpha',
             planet: 'Terra',
             age: 2312,
             CountLegion: 50000,
         },
         {
             Primarca: 'San Ginius',
             godChaos: 'No ',
             legion: 'Angeles Sangrientos',
             planet: 'Baal Secundus',
             age: 600,
             CountLegion: 100002,
         },
        
     ]
     
   },
 ];

   const invoiceFindByClientName  = (clientName) =>{
    invoices.find( i=> i.client.name === clientName)
  }

  const InvoiceById = (id)=> {
    return invoices.find( i=> i.id === id)
  }

  export {
    Angron,
    invoices,
    invoiceFindByClientName as default,
    InvoiceById
    
  }
  
 