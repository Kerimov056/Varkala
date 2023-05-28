import React from 'react'
import './fouter.scss'
import { FaShippingFast } from 'react-icons/fa'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { ImPriceTags } from 'react-icons/im'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { SlEnvolopeLetter } from 'react-icons/sl'

const Fouter = () => {
    return (
        <>
            <div className='fouterone'>
                <div className='fouterone_in'>
                    <div>
                        <div><FaShippingFast /></div>
                        <div className='responsive'>
                            <h3>Free shipping & return</h3>
                            <span>Free Shipping over $300</span>
                        </div>
                    </div>
                    <div>
                        <div><AiOutlineDollarCircle /></div>
                        <div className='responsive'>
                            <h3>Money back guarantee</h3>
                            <span>30 Days Money Back Guarantee</span>
                        </div>
                    </div>
                    <div className='res'>
                        <div className='resIcon'><ImPriceTags /></div>
                        <div className='resIcon_text'>
                            <h3>Best prices</h3>
                            <span>Always the best prices</span>
                        </div>
                    </div>
                    <div className='res'>
                        <div className='resIcon s'><RiCustomerService2Fill /></div>
                        <div className='resIcon_text t'>
                            <h3>020-800-456-747</h3>
                            <span>24/7 Available Support</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className='foutertwo'>
                <div className='foutertwo_in'>
                    <div className='left'>
                        <h3>Be in touch</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> At itaque temporibus.</p>
                        <input type='text' placeholder='Your Email Address'></input>
                        <span><SlEnvolopeLetter /></span>
                    </div>
                    <div className='right'>
                        <div>
                            <b>Shop</b>
                            <ul>
                                <li>For Women</li>
                                <li>For Men</li>
                                <li>Stores</li>
                                <li>Our Blog</li>
                                <li>Shop</li>
                            </ul>
                        </div>
                        <div>
                            <b>Company</b>
                            <ul>
                                <li>Login</li>
                                <li>Register</li>
                                <li>Wishlist</li>
                                <li>Our Products</li>
                                <li>Checkouts</li>
                            </ul>
                        </div>
                        <div>
                            <b>Your account</b>
                            <ul>
                                <li>Login</li>
                                <li>Register</li>
                                <li>Wishlist</li>
                                <li>Our Products</li>
                                <li>Checkouts</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fouterthree'>
                <div className='fouterthree_in'>
                    <h5>© 2020 Your company. All rights reserved.</h5>
                    <div>
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Privacy & cookies</li>
                            <li>Accessibility</li>
                            <li>Customer Data Promise</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Resposive */}

            <div className='bein'>
                <div>
                    <div className='bein_up'>
                        <h3>Be in touch</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> At itaque temporibus.</p>
                        <input type='text' placeholder='Your Email Address'></input>
                        <span><SlEnvolopeLetter /></span>
                    </div>

                    <div className='bein_low'>
                        <button>Shop<AiOutlinePlus /></button>
                        <button>Company<AiOutlinePlus /></button>
                        <button>Your account<AiOutlinePlus /></button>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Fouter