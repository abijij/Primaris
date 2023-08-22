export const ClientView = ({ client, title }) => {

    const { name: nameClient, addres } = client;
    const { country, city, state } = addres;
    return (
        <>
            <h3>{title}</h3>
            <ul className="list-group">
                <li className="list-group-item active">Cliente: {nameClient}</li>
                <li className="list-group-item">Pais: {country} / {state}</li>
                <li className="list-group-item">Ciudad: {city}</li>
            </ul>
        </>
    )
}
