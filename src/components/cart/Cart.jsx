import React from 'react';


const Cart = ({cart}) => {
console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax;
    
    return (
        <div className=''>
            <h3 className='text-xl font-bold mt-4 '>Order Summary</h3>
            <div className='text-lg p-5 space-y-5 font-semibold'>
            <p className='text-lg'>Selected Items: {quantity}</p>
            <p>Total Price:$ {totalPrice}</p>
            <p>Shipping cost:$ {totalShipping}</p>
            <p>Tax: {tax}</p>
            <p className='text-lg mt-5 font-bold'>Grand Total:$ {grandTotal}</p>
            </div>
        </div>
    );
};

export default Cart;