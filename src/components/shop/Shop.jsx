import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
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
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 mt-10">
    {
        products.map(product => <Product key={product.id} product={product} 
        handelAddToCart={handelAddToCart}
        ></Product>)
    }  
    </div>
            <div className="text-center mt-3 bg-orange-200 h-96">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;