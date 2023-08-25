import { Invoice } from "./data/invoice"
import { getInvoice } from "./services/getInvoice"
import { InvoiceView } from "./componets/InvoiceView";
import { ClientView } from "./componets/ClientView";
import { SupplierView } from "./componets/SupplierView";
import { ListItemsView } from "./componets/ListItemsView";
import { TotalView } from "./componets/TotalView";
import { TechnicalView } from "./componets/TechnicalView";
import { useState } from 'react'

export const InvoiceApp = () => {
    const { total, id, name, client, company, items: itemsInitial, technical } = getInvoice();//Destructuracion 


    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');

    const [items, setItems] = useState(itemsInitial);

    const [counter, setCounter] = useState(4);

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
                        <ListItemsView title="Productos de la Factura " items={items} />
                        <TotalView total={total} />

                        <form className="w-50" onSubmit={event => {
                            event.preventDefault();
                            if (productValue.trim().length <= 1) return;
                            if (priceValue.trim().length <= 1) return;
                            if (isNaN(priceValue.trim())) {
                                
                                alert('Error el precio no es un numero');
                                
                                return;
                            }
                            if (quantityValue.trim().length < 1) return;
                            if (isNaN(quantityValue.trim())) {
                                
                                alert('Error en la cantidad no es un numero');
                                
                                return;
                            }
                            setItems([...items, {
                                id: counter,
                                product: productValue.trim,
                                price: +priceValue.trim,
                                quantity: +quantityValue.trim,
                            }]);

                            setProductValue('');
                            setPriceValue('');
                            setQuantityValue('');
                            setCounter(counter + 1)
                        }}>
                            <input type="text"
                                name="product"
                                value={productValue}
                                placeholder="Producto"
                                className="form-control m-3" onChange={event => {
                                    console.log(event.target.value)
                                    setProductValue(event.target.value);
                                }} />

                            <input type="text"
                                name="price"
                                value={priceValue}
                                placeholder="Precio"
                                className="form-control m-3" onChange={event => {
                                    console.log(event.target.value)
                                    setPriceValue(event.target.value);
                                }} />

                            <input type="text"
                                name="quantity"
                                value={quantityValue}
                                placeholder="Cantidad"
                                className="form-control m-3" onChange={event => {
                                    console.log(event.target.value)
                                    setQuantityValue(event.target.value);
                                }} />

                            <button
                                type="submit"
                                className="btn btn-primary m-3">
                                Nuevo producto
                            </button>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )

}