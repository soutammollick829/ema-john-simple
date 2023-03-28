import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../assets/utilities/fakedb';
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

    useEffect(()=> {
        const storeCart = getShoppingCart();
        const saveCart = [];
        for(const id in storeCart){
            const addedProduct = products.find(product => product.id === id);
            
            if (addedProduct){
            const quantity = storeCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    },[products])

    const handelAddToCart = (product) =>{
        // console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
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
            <div className="text-center mt-3">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
