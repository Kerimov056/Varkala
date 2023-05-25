import React, { useState } from 'react'
import './navbar.scss'
import { Link } from "react-router-dom";
import { FaFacebookF } from 'react-icons/fa';
import { FaTshirt } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { BsBasket } from 'react-icons/bs';
import { BsWatch } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';
import { BsFillBagFill } from 'react-icons/bs';
import { BsEraserFill } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiTrousers } from 'react-icons/gi';
import { GiUnderwearShorts } from 'react-icons/gi';
import { GiSleevelessJacket } from 'react-icons/gi';
import { GiPoloShirt } from 'react-icons/gi';
import { GiBilledCap } from 'react-icons/gi';
import { TbShirtSport } from 'react-icons/tb';



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

    // const[open, setOpen] = useState()

    const [home, setHome] = useState(false)
    const [shop, setShop] = useState(false)
    const [icon, setIcon] = useState(false)


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
                            <li onClick={() => setHome((prev) => !prev)}>Home
                                {home ? (
                                    <BsChevronUp />
                                ) : (
                                    <FiChevronDown />
                                )}
                            </li>
                            {home && <div className='open'>
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
                            <li onClick={() => setShop((prev) => !prev)}>Shop
                                {shop ? (
                                    <BsChevronUp />
                                ) : (
                                    <FiChevronDown />
                                )}
                            </li>
                            {shop && <div className='shop'>
                                <div className='leftt'>
                                    <div className='leftt_in'>
                                        <div>
                                            <ul>
                                                <li className='firstt'>Shop pages</li>
                                                <li>Full witdh</li>
                                                <li>Full witdh with category menu</li>
                                                <li>Full witdh with big products</li>
                                                <li>Fixed witdh</li>
                                                <li>Fixed witdh & sidebar</li>
                                                <li>Fixed witdh & masonry layout</li>
                                                <li>Subcatagerios</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul>
                                                <li className='firstt'>Product pages</li>
                                                <li>Product with sticky info</li>
                                                <li>Product with background</li>
                                                <li>Product standart</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='rightt'>
                                    <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/kyle-loftus-596319-unsplash-cropped.jpg"></img>
                                </div>
                            </div>}
                            <li onClick={() => setIcon((prev) => !prev)}>Icons
                            {icon ? (
                                    <BsChevronUp />
                                ) : (
                                    <FiChevronDown />
                                )}
                            </li>
                            {icon && <div className='icon'>
                                    <div className='icon_up'>
                                        <div className='icon_up_in'>
                                            <span><GiTrousers/></span>
                                            <span><GiSleevelessJacket/></span>
                                            <span><FaTshirt/></span>
                                            <span><TbShirtSport/></span>
                                            <span><GiPoloShirt/></span>
                                            <span><BsEraserFill/></span>
                                            <span><GiUnderwearShorts/></span>
                                            <span><GiUnderwearShorts/></span>
                                            <span><BsWatch/></span>
                                            <span><BsFillBagFill/></span>
                                            <span><GiBilledCap/></span>
                                            <span><AiOutlineAppstoreAdd/></span>
                                        </div>
                                    </div>
                                    <div className='icon_low'>
                                        <h3>Don't miss our biggest sales this year. Use the code "SUMMER35" at checkout until Jun. 15!</h3>
                                    </div>
                            </div>}
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

