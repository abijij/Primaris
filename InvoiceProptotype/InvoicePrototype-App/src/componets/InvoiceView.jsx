import propTypes from 'prop-types'
export const InvoiceView = ({id, name}) => {
    return(
        <>
            <ul className="list-group">
                            <li className="list-group-item">Id: {id}</li>
                            <li className="list-group-item">Name: {name}</li>
                        </ul>
        </>
    )
}

InvoiceView.propTypes ={
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired
}