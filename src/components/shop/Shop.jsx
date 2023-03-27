import React, { useEffect, useState } from 'react';
import Product from '../products/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch(`products.json`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);


    const handelAddToCart = (products) =>{
        console.log(products)
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
            Order Summary
            </div>
        </div>
    );
};

export default Shop;