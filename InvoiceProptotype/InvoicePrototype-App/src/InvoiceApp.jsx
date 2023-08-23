import { Invoice } from "./data/invoice"
import { getInvoice } from "./services/getInvoice"
import { InvoiceView } from "./componets/InvoiceView";
import { ClientView } from "./componets/ClientView";
import { SupplierView } from "./componets/SupplierView";
import { ListItemsView } from "./componets/ListItemsView";
import { TotalView } from "./componets/TotalView";

export const InvoiceApp = () => {
    const { total ,id, name, client, company, items } = getInvoice();//Destructuracion 
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
                                <ClientView title="Datos del Cliente" client={client} />
                            </div>
                            <div className="col">
                                <SupplierView title="Datos de la Empresa" company={company} />
                            </div>
                        </div>
                        <ListItemsView title="Productos de la Factura " items={items} />
                        <TotalView total={total}/>
                    </div>
                </div>
            </div>

        </>
    )

}