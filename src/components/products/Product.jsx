import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  console.log(props)
    const {img,name,price,ratings,seller} = props.product;
    const handelAddToCart = props.handelAddToCart;


    return (
        <>
     <div className="card h-96 glass p-2">
  <figure><img src={img} alt="car!"/></figure>
  <div className="">
    <h2 className="text-xl font-semibold lowercase">{name}</h2>
    <p className='text-xl mt-5'>Price : ${price}</p>
    <p className='mt-7'>Manufacturer : {seller}</p>
    <p>Rating : {ratings}</p>
  </div>
  <button onClick={() => handelAddToCart(props.Product)} className="bg-orange-300 w-full h-14 mt-4 mb-0 hover:bg-orange-400">Add to Cart
  <FontAwesomeIcon icon={faShoppingCart} />
</button>
</div>
        </>
    );
};

export default Product;