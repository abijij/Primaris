import { RowItemView } from "./RowItemView"
import propTypes from 'prop-types'
export const ListItemsView = ({ title, items, handlerDelete}) => {
    return (
        <>
            <h4> {title}</h4>
            <table className="table table-striped table-hover" >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, product, price, quantity }) => (
                       <RowItemView key={id} 
                       id={id}
                       product={product} 
                       price={price} 
                       quantity={quantity}
                       handlerDelete={id => handlerDelete(id)} />
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