import propTypes from 'prop-types'
export const ClientView = ({ client, title }) => {

    const { name: nameClient, addres:{ country, city, state }  } = client;
   
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

ClientView.propTypes ={
    title: propTypes.string.isRequired,
    client:propTypes.object.isRequired,

}
