import { Invoice } from "./data/invoice"
import { getInvoice, caculateTotal } from "./services/getInvoice"
import { InvoiceView } from "./componets/InvoiceView";
import { ClientView } from "./componets/ClientView";
import { SupplierView } from "./componets/SupplierView";
import { ListItemsView } from "./componets/ListItemsView";
import { TotalView } from "./componets/TotalView";
import { FormItemsView } from "./componets/FormInvoiceItemsView";
import { TechnicalView } from "./componets/TechnicalView";
import { useState, useEffect } from 'react'



const invoiceInitialData = {
    id: 0,
    name: '',
    client: {
        name: '',
        addres: {
            country: '',
            city: '',
            state: ''
        },
    },
    company: {
        name: '',
        fiscalNumber: '',
        addres: {
            country: '',
            city: '',
            state: ' '
        }
    },

    technical: {
        name: '',
        lastname: '',
        employee_number: '',
        data: {
            phone_number: 0,
            area: '',
        }
    },
    items: []
}


export const InvoiceApp = () => {

    const [invoice, setInvoice] = useState(invoiceInitialData);

    const [items, setItems] = useState([]);

    const { id, name, client, company, technical } = invoice;//Destructuracion 

    const [counter, setCounter] = useState(4);

    const [total, setTotal] = useState(0);

    const [activeForm, setactiveForm] = useState(false);


    useEffect(() => {
        const data = getInvoice();
        console.log(data);
        setInvoice(data);
        setItems(data.items);
    }, []);


    useEffect(() => {
        setTotal(caculateTotal(items))
    }, [items]);

    const handlerAddInvoiceItems = ({ product, price, quantity }) => {
        setItems([...items, {
            id: counter,
            product: product.trim(),
            price: +price.trim(),
            quantity: parseInt(quantity.trim(), 10)
        }]);

        setCounter(counter + 1);
    }


  const handlerDeleteInvoiceItem = (id) =>{
    setItems(items.filter( item => item.id !== id))
  }

    const onActiveForm = () =>{

        setactiveForm(!activeForm)

    }

    return (
        <>
            <div className="container">
                <div className="card my-3" >
                    <div className="card-header">
                        Ejemplo Factura
                    </div>
                    <div className="card-body">
                        <InvoiceView id={id} name={name} />
                        <div className="row my-3">
                            <div className="col">
                                <TechnicalView title="Datos del Tecnico" technical={technical} />
                            </div>
                            <div className="col">
                                <ClientView title="Datos del Cliente" client={client} />
                            </div>
                            <div className="col">
                                <SupplierView title="Datos de la Empresa" company={company} />
                            </div>
                        </div>
                        <ListItemsView title="Productos de la Factura " items={items}  handlerDelete={id =>  handlerDeleteInvoiceItem(id)}/>
                        <TotalView total={total} />
                        <button type="submit"
                                className="btn btn-secondary m-3"
                                onClick={ onActiveForm}>{!activeForm ?'Agregar Item' : 'Ocultar Formulario'}</button>
                        {
                            !activeForm || <FormItemsView handler={handlerAddInvoiceItems} /> }
                    </div>
                </div>
            </div>

        </>
    )

}