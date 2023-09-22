import { Invoice } from "../data/invoice"

export const getInvoice = () => {
    // console.log(Invoice);
    // let total = 0 ;
    // Invoice.items.forEach(item => {

    //     total = total + item.price * item.quantity;

    // });

    const total = caculateTotal(Invoice.items)
 
    return { ...Invoice, total};
}

export const caculateTotal = (items = []) => {

   return items
        .map(item => item.price * item.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}