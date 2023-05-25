import React, { useState } from 'react'
import './navbar.scss'
// import List from '../Helpers/List'
import { Link } from "react-router-dom";
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { BsBasket } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {

    const homeList = [
        {
            "home": "Home 1",
            "style": "Fashion"
        },
        {
            "home": "Home 2",
            "style": "Fashion"
        },
        {
            "home": "Home 3",
            "style": "Design"
        },
        {
            "home": "Home 4",
            "style": "Design"
        },
    ]
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className='navbar'>
                <div className='navbar_in'>
                    <div className='left'>
                        <span><FaFacebookF /></span>
                        <span><AiOutlineTwitter /></span>
                        <h4><span><BsTelephone /></span>020-800-456-747</h4>
                    </div>
                    <h3>Free in-store delivery</h3>
                    <div className='right'>
                        <button>English<span><FiChevronDown /></span></button>
                        <button>USD<span><FiChevronDown /></span></button>
                    </div>
                </div>
            </div>


            <div className='navbar2'>
                <div className='navbar2_in'>
                    <div className='left2'>
                        <ul>
                            <li><Link to="/Varkala" className='link'>Varkala</Link></li>
                            <li onClick={() => setOpen((prev) => !prev)}>Home
                                {open ? (
                                    <BsChevronUp />
                                ) : (
                                    <FiChevronDown />
                                )}
                            </li>
                            {open && <div className='open'>
                                {homeList.map((item, i) => (
                                    <Link to="/" className='link'>
                                        <div className='open_in'>
                                            <h3 className='h11'>{item.home}</h3>
                                            <span>-</span>
                                            <h3 className='h12'>{item.style}</h3>
                                        </div>
                                    </Link>
                                ))}
                            </div>}
                            <li onClick={() => setOpen((prev) => !prev)}>Shop
                            {open ? (
                                    <BsChevronUp />
                                ) : (
                                    <FiChevronDown />
                                )}
                            </li>
                            <li>Icons<FiChevronDown /></li>
                            <li>Pages<FiChevronDown /></li>
                            <li>Docs<FiChevronDown /></li>
                        </ul>
                    </div>
                    <span><input type="search" placeholder='   Search' /><AiOutlineSearch /></span>
                    <div className='right2'>
                        <span><BsPerson /></span>
                        <span><AiOutlineHeart /></span>
                        <span><BsBasket /></span>
                        <span><GiHamburgerMenu /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

