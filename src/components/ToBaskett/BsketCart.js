import React, { useContext } from 'react';
import './tobasket.scss'
import { ShopContext } from '../content/ShopC'  

const BsketCart = ({id,imgurl,name,price,category,color}) => {

  const {cartItems,addToCart,removeFromCart,updateCartItemCount,checkout} = useContext(ShopContext)

  return (
    <>
        <div className='dowlandProduct'>
            <img src={imgurl}></img>
            <div>
                <h4>{name}</h4>
                <p className='sizeL'>Size: Large</p>
                <p>Category: {category}</p>
                <p>Color: {color}</p>
            </div>
            <span className='oneSpan'>${price}</span>
            <p onClick={() => removeFromCart(id)}>-</p>
            <input value={cartItems[id]}  onChange={(e) => updateCartItemCount(Number(e.target.value),id)}></input>
            <p onClick={() => addToCart(id)}>+</p>
            <span onClick={() => checkout(id)} className='close'>X</span>
       </div>
       <hr/>
    </>
  )
}

export default BsketCart