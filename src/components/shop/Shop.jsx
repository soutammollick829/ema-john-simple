import React, { useEffect, useState } from 'react';
import Product from '../products/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="products-container grid grid-cols-3 gap-10 mx-10 mt-10">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }  
            </div>
            <div className="add-to-cart bg-red-400">
                add to cart
            </div>
        </div>
    );
};

export default Shop;