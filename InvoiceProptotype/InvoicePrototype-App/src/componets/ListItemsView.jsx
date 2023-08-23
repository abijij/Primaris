import { RowItemView } from "./RowItemView"
import propTypes from 'prop-types'
export const ListItemsView = ({ title, items }) => {
    return (
        <>
            <h4> {title}</h4>
            <table className="table table-striped table-hover" >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ product, price, quantity, id }) => (
                       <RowItemView key={id} product={product} price={price} quantity={quantity} />
                    )
                    )}

                </tbody>
            </table>
        </>
    )
}

ListItemsView.propTypes = {
    title: propTypes.string.isRequired,
    items: propTypes.array.isRequired
}