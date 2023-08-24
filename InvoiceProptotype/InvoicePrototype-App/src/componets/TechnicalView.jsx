import propTypes from 'prop-types'

export const TechnicalView = ({ technical, title }) => {
    const { name:nametechnical, lastname, employee_number, data:{phone_number, area}  } = technical
    return (
        <>
            <h3>{title}</h3>
            <ul className="list-group">
                <li className="list-group-item active">Nombre: {nametechnical}  {lastname} </li>
                <li className="list-group-item">Numero de empleado: {employee_number}</li> 
                <li className="list-group-item">Numero de telefono: {phone_number}</li> 
                <li className="list-group-item">Area: {area}</li> 
            </ul>
        </>
    )
}

TechnicalView.propTypes = {

    title: propTypes.string.isRequired,
    technical: propTypes.object.isRequired
}