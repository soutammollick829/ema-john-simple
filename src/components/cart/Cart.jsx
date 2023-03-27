import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax;
    
    return (
        <div className=''>
            <h3 className='text-xl font-bold mt-4 '>Order Summary</h3>
            <div className='text-lg p-5 space-y-5 font-semibold'>
            <p className='text-lg '>Selected Items: {cart.length} </p>
            <p>Total Price:$ {totalPrice}</p>
            <p>Shipping cost:$ {totalShipping}</p>
            <p>Tax: {tax}</p>
            <p className='text-lg mt-5 font-bold'>Grand Total:$ {grandTotal}</p>
            </div>
        </div>
    );
};

export default Cart;