import React, { useEffect, useContext } from 'react'
import './tobasket.scss'
import { Homecart } from '../Helpers/Homecart';
import BsketCart from './BsketCart';
import { ShopContext } from '../content/ShopC'
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ToBasket = () => {

    useEffect(() => {
        AOS.init({
            offset: 30,
            duration: 500,
            delay: 60,
        });
        AOS.refresh();
    }, []);

    const { cartItems, getTotalAmount } = useContext(ShopContext);

    const total = getTotalAmount()

    const navigate = useNavigate()
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

                    {total > 0 ? (<div className='cart_in'>
                        <div className='productss'>
                            <div>
                                {
                                    Homecart.map((product) => {
                                        if (cartItems[product.id] !== 0) {
                                            return <BsketCart id={product.id} imgurl={product.img} name={product.name} price={product.price} />
                                        }
                                    })
                                }
                            </div>
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
                                    <p className='cem'>${total}</p>
                                </div>
                                <h6></h6>
                                <button id='Continue' onClick={() => navigate('/')}>Continue Shopping</button>
                            </div>
                        </div>
                    </div>
                    ) : (
                        <div data-aos="fade-up"
                            data-aos-duration="3000" className='notProduct'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjfq1ju534VapeO-Q8_c1gxWFfgYmcQ78jQ&usqp=CAU'></img>
                            <h1>Empty basket</h1>
                            <button id='EmpContiune' onClick={() => navigate('/')}>Continue Shopping</button>
                        </div>
                    )
                    }
                </div>
            </div>
        </>
    )
}

export default ToBasket