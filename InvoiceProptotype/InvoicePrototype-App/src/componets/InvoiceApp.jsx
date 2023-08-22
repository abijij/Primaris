import { Invoice } from "../data/invoice"
import { getInvoice } from "../services/getInvoice"
import { InvoiceView } from "./InvoiceView";
import { ClientView } from "./ClientView";
import { SupplierView } from "./SupplierView";
import { ListItemsView } from "./ListItemsView";

export const InvoiceApp = () => {
    const { id, name, client, company, items } = getInvoice();//Destructuracion 
    return (
        <>
            <div className="container">
                <div className="card my-3" >
                    <div class="card-header">
                        Ejemplo Factura
                    </div>
                    <div className="card-body">
                        <InvoiceView id={id} name={name} />
                        <div className="row my-3">
                            <div className="col">
                                <ClientView title="Datos del Cliente" client={client} />
                            </div>
                            <div className="col">
                                <SupplierView title="Datos de la Empresa" company={company} />
                            </div>
                        </div>
                        <ListItemsView title="Productos de la Factura " items={items} />
                    </div>
                </div>
            </div>

        </>
    )

}