import React, { useEffect, useState } from 'react';
import Product from '../products/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]);
    useEffect(()=>{
        fetch(`products.json`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handelAddToCart = (product) =>{
        // console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
      }

    return (
        <div className='shop-container'>
            <div className="products-container grid grid-cols-3 gap-10 mx-10 mt-10">
    {
        products.map(product => <Product key={product.id} product={product} 
        handelAddToCart={handelAddToCart}
        ></Product>)
    }  
            </div>
            <div className="text-center text-2xl mt-3 bg-orange-200">
            <h3 className='text-xl font-bold mt-4'>Order Summary</h3>
            <div className='text-lg p-5 space-y-5'>
            <p className='text-lg '>Selected Items: {cart.length} </p>
            <p>Total Price:</p>
            <p>Total Shipping Charge:</p>
            <p>Tax: </p>
            <p className='text-lg mt-5 font-bold'>Grand Total:</p>
            </div>
            </div>
        </div>
    );
};

export default Shop;