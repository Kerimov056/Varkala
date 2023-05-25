import React from 'react'
import './fouter.scss'
import {FaShippingFast} from 'react-icons/fa'
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {ImPriceTags} from 'react-icons/im'
import {RiCustomerService2Fill} from 'react-icons/ri'

const Fouter = () => {
  return (
    <>
        <div className='fouterone'>
            <div className='fouterone_in'>
                <div>
                    <div><FaShippingFast/></div>
                    <div>
                        <h3>Free shipping & return</h3>
                        <span>Free Shipping over $300</span>
                    </div>
                </div>
                <div>
                    <div><AiOutlineDollarCircle/></div>
                    <div>
                        <h3>Money back guarantee</h3>
                        <span>30 Days Money Back Guarantee</span>
                    </div>
                </div>
                <div>
                    <div><ImPriceTags/></div>
                    <div>
                        <h3>Best prices</h3>
                        <span>Always the best prices</span>
                    </div>
                </div>
                <div>
                    <div><RiCustomerService2Fill/></div>
                    <div>
                        <h3>020-800-456-747</h3>
                        <span>24/7 Available Support</span>
                    </div>
                </div>
                
            </div>
        </div>
        <div></div>
        <div></div>
    </>
  )
}

export default Fouter