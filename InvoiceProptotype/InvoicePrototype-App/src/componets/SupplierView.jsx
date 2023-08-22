export const SupplierView = ({ company, title }) => {
    const { name: nameCompany, fiscalNumber } = company
    return (
        <>
            <h3>{title}</h3>
            <ul className="list-group">
                <li className="list-group-item active">Nombre: {nameCompany} </li>
                <li className="list-group-item">Numero Fiscal: {fiscalNumber}</li>
            </ul>
        </>
    )
}