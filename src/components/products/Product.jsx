import React from 'react';

const Product = (props) => {
    console.log(props.product)
    const {category,img,name,price,ratings,seller} = props.product
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
  {/* <button className='bg-orange-300'>Add to Cart</button> */}
  <button className="bg-orange-300 w-full h-14 mt-4" >Add to Cart</button>
</div>
        </>
    );
};

export default Product;