import React, { useContext } from 'react'
import './tobasket.scss'
// import { ShopContext } from '../content/ShopC'

const ToBasket = ({ id, productName, price, productImage }) => {


    return (
        <>
            <div className="cart">
                <div className="cart_in">
                    <div className="one">
                        <img src={productImage}></img>
                    </div>
                    <div className="two">
                        <h1>{productName}</h1>
                        <p>{price}</p>
                        <button type="button">-</button>
                        <input ></input>
                        <button type="button">+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToBasket