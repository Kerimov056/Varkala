import React from 'react'
import './navbar.scss'
import { Link } from "react-router-dom";
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsBasket } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

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


            <div className='navbar2'>
                <div className='navbar_in2'>
                    <div className='left2'>
                      <ul>
                        <li>Varkala<FiChevronDown/></li>
                        <li>Home<FiChevronDown/></li>
                        <li>Shop<FiChevronDown/></li>
                        <li>Icons<FiChevronDown/></li>
                        <li>Pages<FiChevronDown/></li>
                        <li>Docs<FiChevronDown/></li>
                      </ul>
                    </div>
                    <h3>Free in-store delivery</h3>
                    <div className='right2'>
                        <span><input type="search" /><AiOutlineSearch/></span>
                        <span><BsFillPersonFill/></span>
                        <span><AiOutlineHeart/></span>
                        <span><BsBasket/></span>
                        <span><GiHamburgerMenu/></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar


{/* <Link to="/Varkala"> */}
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'
