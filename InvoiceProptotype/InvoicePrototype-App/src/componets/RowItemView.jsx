import propTypes from 'prop-types'
export const RowItemView = ({product, price, quantity}) => {
    return (
        <>
            <tr >
                <td>{product}</td>
                <td> ${price}</td>
                <td>{quantity}</td>
            </tr>
        </>
    )
}

RowItemView.prototype = {

    product: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    quantity: propTypes.number.isRequired,
}