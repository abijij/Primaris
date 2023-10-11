import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/CatalogView"
import { CardView } from "../components/CardView"

export const CartRoutes = ({handlerAddProductCart, cardItems, handlerDeleteItems }) => {
    return (
        <>
            <Routes>
                <Route
                    path="catalog"
                    element={<CatalogView handler={handlerAddProductCart} />}
                />
                <Route
                    path="cart"
                    element={(
                        cardItems?.length <= 0 ?
                            <div className="alert alert-warning">No hay productos en  tu carrito de compras</div>
                            :
                            (
                                <div className="my-4 w-50">
                                    <CardView items={cardItems} handlerDelete={handlerDeleteItems} />
                                </div>
                            )
                    )}
                />

                <Route path="/" element={<Navigate to={'/catalog'} />} />
            </Routes>
        </>
    )
}