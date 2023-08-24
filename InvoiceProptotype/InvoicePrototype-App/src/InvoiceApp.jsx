import { Invoice } from "./data/invoice"
import { getInvoice } from "./services/getInvoice"
import { InvoiceView } from "./componets/InvoiceView";
import { ClientView } from "./componets/ClientView";
import { SupplierView } from "./componets/SupplierView";
import { ListItemsView } from "./componets/ListItemsView";
import { TotalView } from "./componets/TotalView";
import { TechnicalView } from "./componets/TechnicalView";

export const InvoiceApp = () => {
    const { total, id, name, client, company, items, technical } = getInvoice();//Destructuracion 
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

                        <form>
                            <input type="text"
                                name="product"
                                placeholder="Producto" 
                                className="form-control m-3" onChange={ event => {
                                    console.log(event.target.value)
                                }}/>
 
                            <input type="text"
                                name="price"
                                placeholder="Precio" 
                                className="form-control m-3"onChange={ event => {
                                    console.log(event.target.value)
                                }}/>

                            <input type="text"
                                name="quantity"
                                placeholder="Cantidad" 
                                className="form-control m-3" onChange={ event => {
                                    console.log(event.target.value)
                                }}/>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )

}