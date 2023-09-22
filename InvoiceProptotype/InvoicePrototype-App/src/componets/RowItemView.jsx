import propTypes from 'prop-types'
export const RowItemView = ({id, product, price, quantity, handlerDelete}) => {
    return (
        <>
            <tr >
                <td>{product}</td>
                <td> ${price}</td>
                <td>{quantity}</td>
                <td><button  className="btn btn-danger " 
                onClick={() => handlerDelete(id)}>Eliminar</button></td>
            </tr>
        </>
    )
}

RowItemView.prototype = {

    product: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    quantity: propTypes.number.isRequired,
}