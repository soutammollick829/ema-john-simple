import { faArrowRightArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';


const Cart = ({cart}) => {
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
        <div className='bg-orange-200 sticky top-0'>
            <h3 className='text-xl font-bold pt-6 '>Order Summary</h3>
            <div className='text-lg p-5 space-y-5 font-semibold'>
            <p className='text-lg'>Selected Items: {quantity}</p>
            <p>Total Price:$ {totalPrice}</p>
            <p>Shipping cost:$ {totalShipping}</p>
            <p>Tax: {tax}</p>
            <p className='text-lg mt-5 font-bold'>Grand Total:$ {grandTotal}</p>
            <button className="bg-red-400 h-10 w-full text-white hover:bg-red-500 rounded-md">Clear Cart <FontAwesomeIcon icon={faTrash} /></button><br></br>
            <button className="bg-orange-400 h-10 w-full text-white hover:bg-orange-500 rounded-md">Review Order <FontAwesomeIcon icon={faArrowRightArrowLeft} /></button>
            </div>
            
        </div>
    );
};

export default Cart;