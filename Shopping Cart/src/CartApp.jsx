import { useItemCart } from "./hooks/useItemsCart"
import { Navbar } from "./components/Navbar"
import { CartRoutes } from "./routes/CartRoutes"


//String a objeto



export const CartApp = () => {
    const { cardItems, handlerAddProductCart, handlerDeleteItems } = useItemCart();
    return (
        <>
            <Navbar />
            <div className="container my-4">
                <h1>CartApp</h1>
                <CartRoutes
                    cardItems={cardItems}
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteItems={handlerDeleteItems}
                />
            </div>
        </>
    )
}