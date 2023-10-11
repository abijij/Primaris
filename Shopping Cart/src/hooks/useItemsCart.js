import { useReducer, useState, useEffect } from "react";//String a objeto
import { ItemsReducer } from "../reducer/ItemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/ItemsActions";



const initialCardItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemCart = () => {

    console.log("Valor de initialCardItems: " + initialCardItems)

    const [cardItems, dispatch] = useReducer(ItemsReducer, initialCardItems)

    useEffect(() => {
        //Objeto a string
        sessionStorage.setItem("cart", JSON.stringify(cardItems));
    }, [cardItems])


    const handlerAddProductCart = (product) => {

        const hasItem = cardItems.find((i) => i.product.id === product.id);

        console.log('Logs de hasItem: ' + hasItem)
        //Validacion para sumar el quantity del producto
        if (hasItem) {
            dispatch(
                {
                    type: UpdateQuantityProductCart,
                    payload: product,
                }
            )
        } else {
            dispatch({
                type: AddProductCart,
                payload: product
            });
        }
    }

    const handlerDeleteItems = (id) => {
        dispatch({
            type: DeleteProductCart,
            payload: id
        })
    }
    return {
        cardItems,
        handlerAddProductCart,
        handlerDeleteItems,

    }
}