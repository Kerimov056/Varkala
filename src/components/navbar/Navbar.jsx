import React from 'react'
import './navbar.scss'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='navbar_in'>
                    <div className='left'>
                        <span><FaFacebookF/></span>
                        <span><AiOutlineTwitter/></span>
                        <h4><span><BsTelephone/></span>020-800-456-747</h4>
                    </div>
                    <h3>Free in-store delivery</h3>
                    <div className='right'>
                        <button>English<span><FiChevronDown/></span></button>
                        <button>USD<span><FiChevronDown/></span></button>
                    </div>
                </div>
            </div>


            <div className='navbar'>
                <div className='navbar_in'>
                    <div className='left'>
                        <span><FaFacebookF/></span>
                        <span><AiOutlineTwitter/></span>
                        <h4><span><BsTelephone/></span>020-800-456-747</h4>
                    </div>
                    <h3>Free in-store delivery</h3>
                    <div className='right'>
                        <input type="search" />
                        <button>USD<span><FiChevronDown/></span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar