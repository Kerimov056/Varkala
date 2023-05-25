import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/bs';

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='navbar_in'>
                    <div>
                        <span><FaFacebookF/></span>
                        <span><AiOutlineTwitter/></span>
                        <span><span><BsTelephone/></span>020-800-456-747</span>
                    </div>
                    <h3>Free in-store delivery</h3>
                    <div>
                        <button>English<span><FiChevronDown/></span></button>
                        <button>USD<span><FiChevronDown/></span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar