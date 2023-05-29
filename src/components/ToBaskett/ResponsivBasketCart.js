import React, { useContext } from 'react';
import './tobasket.scss'
import { ShopContext } from '../content/ShopC'

const ResponsivBasketCart = ({ id, imgurl, name, price }) => {

    const { cartItems, addToCart, removeFromCart, updateCartItemCount, checkout, getTotalAmount } = useContext(ShopContext)

    return (
        <>
            <div className='ResponProduc'>
                <div className='ResponProduc_up'>
                    <div>
                        <img src={imgurl}></img>
                        <div>
                            <h4>{name}</h4>
                            <p className='sizeL'>Size: Large</p>
                            <p>Colour: Green</p>
                        </div>
                    </div>
                    <span id='ResX' onClick={() => checkout(id)} className='close'>X</span>
                </div>

                <div className='ResponProduc_low'>
                    <div>
                        <p>Price per item</p><span>${price}</span>
                    </div>
                    <div>
                        <p>Quantity</p>
                        <div>
                            <p onClick={() => removeFromCart(id)}>-</p>
                            <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}></input>
                            <p onClick={() => addToCart(id)}>+</p>
                        </div>
                    </div>
                    <div>
                        <p>Total price</p><span>${getTotalAmount}</span>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default ResponsivBasketCart