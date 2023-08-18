export const Invoice = {
    id: 10,
    name: 'Componetes Newland',
    client: {
        name: 'CFE OAXACA',
        addres:{
            country: 'Mexico',
            city:'San Juan Bautista Tuxtepec',
            state:'Oaxaca'
        },
    },
    company:{
        name: 'Pos Dev',
        fiscalNumber:'Pendiente',
        addres:{
            country:'Mexico',
            city:'CDMX',
            state:'Albaro Obregon'
        }
    },
    items:[
        {
            product:'LCD Newland',
            price:1800,
            quantity:1,
        },
        {
            roduct:'Tarjeta de carga Newland',
            price:800,
            quantity:1,
        },
        {
            roduct:'Tarjeta Madre Newland',
            price:2900,
            quantity:1,
        },
      
        
    ]
}