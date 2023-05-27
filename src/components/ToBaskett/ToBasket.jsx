import React, { useContext } from 'react'
import './tobasket.scss'
// import { ShopContext } from '../content/ShopC'

const ToBasket = ({ id, productName, price, productImage }) => {


    return (
        <>
            <div className='tobasket'>
                <div>
                    <div>
                        <h5><span>Home</span>- Shopping cart</h5>
                        <h1>Shopping cart</h1>
                        <p>You have 3 items in your cart.</p>
                        <p>For the checkout, you can use either a <span>Multiple pages checkout</span>or have everything on a<span>single page.</span></p>
                    </div>

                    <div className='cart_in'>
                <div className='productss'>
                    asdas
                </div>
                <div className='Summary'>
                        <h3><h3>Order Summary</h3></h3>
                    <div className='Summary_in'>
                        <p>Shipping and additional costs are calculated based on values you have entered.</p>
                        <h6></h6>
                        <div className='Subtotal'>
                            <span>Order Subtotal</span>
                            <p>$390.00</p>
                        </div>
                        <h6></h6>
                        <div className='Shipping'>
                            <h1>Shipping and handling</h1>
                            <p>$10.00</p>
                        </div>
                        <h6></h6>
                        <div className='Tax'>
                            <span>Tax</span>
                            <p>$390.00</p>
                        </div>
                        <h6></h6>
                        <div className='Total'>
                            <span>Total</span>
                            <p>$400.00</p>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>

            
        </>
    )
}

export default ToBasket