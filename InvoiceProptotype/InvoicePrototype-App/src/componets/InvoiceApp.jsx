import { Invoice } from "../data/invoice"
import { getInvoice } from "../services/getInvoice"

export const InvoiceApp = () => {
        const {id, name, client, company, items} = getInvoice();//Destructuracion 
        const { name:nameClient, addres} = client;
        const{ country, city, state } = addres;
        const {name:nameCompany, fiscalNumber} = company
    return (
        <>
            <h1>Ejemplo Factura</h1>
            <ul>
                <li>Id: {id}</li>
                <li>Name: {name}</li>
            </ul>

            <h3>Datos del cliente</h3>
            <ul>
                <li>Client: {nameClient}</li>
                <li>Pais: {country}</li>
                <li>Ciudad: {city}</li>
                <li>Estado: {state}</li>
            </ul>

            <h3>Datos del Provedor</h3>
            <ul>
                <li>Nombre: {nameCompany} </li>
                <li>Numero Fiscal: {fiscalNumber}</li>
            </ul>

            <h4> Productos de la factura</h4>
            <lu>
                
            </lu>
        </>
    )

}