import React, { useState, useEffect, useContext } from 'react'
// import { ShopContext } from '../content/ShopC'
import './navbar.scss'
import { Link } from "react-router-dom";
import { FaFacebookF } from 'react-icons/fa';
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
import { GiShorts } from 'react-icons/gi';
import { GiUnderwearShorts } from 'react-icons/gi';
import { GiMonclerJacket } from 'react-icons/gi';
import { GiSleevelessJacket } from 'react-icons/gi';
import { GiPoloShirt } from 'react-icons/gi';
import { GiBilledCap } from 'react-icons/gi';
import { TbShirtSport } from 'react-icons/tb';
import AOS from "aos";
import "aos/dist/aos.css";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";



const Navbar = () => {

    // const {cartItems,paket} = useContext(ShopContext)


    useEffect(() => {
        AOS.init({
            offset: 30,
            duration: 500,
            delay: 60,
        });
        AOS.refresh();
    }, []);

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
    const [pages, setPages] = useState(false)
    const [docs, setDocs] = useState(false)


    return (
        <>
            <div className='navbar'>
                <div className='navbar_in'>
                    <div className='left'>
                        <span><FaFacebookF /></span>
                        <span><AiOutlineTwitter /></span>
                        <h4><span><BsTelephone /></span>020-800-456-747</h4>
                    </div>
                    <h3 id='free'>Free in-store delivery</h3>
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
                            <li><Link to="/Varkala" className='link not'>Varkala</Link></li>
                            <li onClick={() => setHome((prev) => !prev)}>Home
                                {home ? (
                                    <BsChevronUp />
                                ) : (
                                    <FiChevronDown />
                                )}
                            </li>
                            {home && <div data-aos="fade-up" className='open'>
                                {homeList.map((item, i) => (
                                    <Link onClick={() => setHome((prev) => !prev)} to="/" className='link'>
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
                            {shop && <div data-aos="fade-up" className='shop'>
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
                            {icon && <div data-aos="fade-up" className='icon'>
                                <div className='icon_up'>
                                    <div className='icon_up_in'>
                                        <h3><div><GiTrousers className='iconss' /></div><div className='ml'>Trousers</div></h3>
                                        <h3><div><GiSleevelessJacket className='iconss' /></div><div className='ml'>Jackets</div></h3>
                                        <h3><div><TbShirtSport className='iconss' /></div><div className='ml'>T-Shirts</div></h3>
                                        <h3><div><GiPoloShirt className='iconss' /></div><div className='ml'>Pullovers</div></h3>
                                        <h3><div><BsEraserFill className='iconss' /></div><div className='ml'>Scarfs</div></h3>
                                        <h3><div><GiUnderwearShorts className='iconss' /></div><div className='ml'>Shorts</div></h3>
                                        <h3><div><GiShorts className='iconss' /></div><div className='ml'>Underwear</div></h3>
                                        <h3><div><BsWatch className='iconss' /></div><div className='ml'>Watches</div></h3>
                                        <h3><div><GiMonclerJacket className='iconss' /></div><div className='ml'>Trousers</div></h3>
                                        <h3><div><BsFillBagFill className='iconss' /></div><div className='ml'>Bags</div></h3>
                                        <h3><div><GiBilledCap className='iconss' /></div><div className='ml'>TrouCapssers</div></h3>
                                        <h3><div><AiOutlineAppstoreAdd className='iconss' /></div><div className='ml'>Accessories</div></h3>
                                    </div>
                                </div>
                                <div className='icon_low'>
                                    <h3>Don't miss our biggest sales this year. Use the code "SUMMER35" at checkout until Jun. 15!</h3>
                                </div>
                            </div>}
                            <li onClick={() => setPages((prev) => !prev)}>Pages
                                {pages ? (
                                    <BsChevronUp />
                                ) : (
                                    <FiChevronDown />
                                )}
                            </li>
                            {pages && <div data-aos="fade-up" className='pages'>
                                <div className='pages_in'>
                                    <div>
                                        <div className='pages_in_img'>
                                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/blog/christopher-campbell-28571-unsplash.jpg"></img>
                                        </div>
                                        <div className='oneLine'>
                                            <b>Homepage</b>
                                            <ul>
                                                <li>Home 1 - Fashion</li>
                                                <li>Home 2 - Fashion</li>
                                                <li>Home 3 - Design</li>
                                                <li>Home 4 - Design</li>
                                            </ul>
                                        </div>
                                        <div className='twoline'>
                                            <ul style={{ marginLeft: "-30px" }}>
                                                <b>Category</b>
                                                <li>Full width</li>
                                                <li>Full width with category menu</li>
                                                <li>Full width with big products</li>
                                                <li>Fixed width</li>
                                                <li>Fixed width & sidebar</li>
                                                <li>Fixed width & masonry layout</li>
                                                <li>Subcategories</li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div>
                                        <div className='pages_in_img'>
                                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/blog/ian-dooley-347962-unsplash.jpg"></img>
                                        </div>
                                        <div className='oneLine'>
                                            <b>Order process</b>
                                            <ul>
                                                <li style={{ marginLeft: "-30px" }}>Shopping cart</li>
                                                <li style={{ marginLeft: "-30px" }}>Checkout - Five steps</li>
                                                <li style={{ marginLeft: "-30px" }}>Checkout - Single-page</li>
                                                <li style={{ marginLeft: "-30px" }}>Checkout - confirmed</li>
                                                <li style={{ marginLeft: "-30px" }}>Wishlist</li>
                                            </ul>
                                        </div>
                                        <div className='twoline'>
                                            <ul style={{ marginLeft: "-30px" }}>
                                                <b>Product</b>
                                                <li>Product with sticky info</li>
                                                <li>Product with background</li>
                                                <li>Product standard</li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div>
                                        <div className='pages_in_img'>
                                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/blog/ian-dooley-347942-unsplash.jpg"></img>
                                        </div>
                                        <div className='oneLine'>
                                            <b>Blog</b>
                                            <ul>
                                                <Link onClick={() => setPages((prev) => !prev)} to="/blog" className='link'><li style={{ marginLeft: "-28px" }}>Blog</li></Link>
                                                <Link onClick={() => setPages((prev) => !prev)} to="/blog" className='link'><li style={{ marginLeft: "-28px" }}>Blog - Masonry</li></Link>
                                                <li style={{ marginLeft: "-28px" }}>Post</li>
                                            </ul>
                                        </div>
                                        <div className='twoline'>
                                            <ul style={{ marginLeft: "-30px" }}>
                                                <b>Pages</b>
                                                <Link onClick={() => setPages((prev) => !prev)} to="/about" className='link'><li>About - Company </li></Link>
                                                <Link onClick={() => setPages((prev) => !prev)} to="/about" className='link'><li>About v.2 - Person </li></Link>
                                                <li>F.A.Q.</li>
                                                <Link onClick={() => setPages((prev) => !prev)} to="/contact" className='link'><li>Contact</li></Link>
                                                <li>Privacy policy</li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div>
                                        <div className='pages_in_img'>
                                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/blog/photo-1534126511673-b6899657816a.jpg"></img>
                                        </div>
                                        <div className='oneLine'>
                                            <ul>
                                                <b>Customer</b>
                                                <li>Login/sign up</li>
                                                <li>Orders</li>
                                                <li>Order detail </li>
                                                <li>Order tracking </li>
                                                <li>Addresses </li>
                                                <li>Profile </li>
                                                <li>Wishlist </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>}
                            <li onClick={() => setDocs((prev) => !prev)}>Docs
                                {docs ? (
                                    <BsChevronUp />
                                ) : (
                                    <FiChevronDown />
                                )}
                            </li>
                            {docs && <div data-aos="fade-up" className='docs'>
                                <div>
                                    <ul>
                                        <li>Introduction</li>
                                        <li>Directory structure</li>
                                        <li>Gulp</li>
                                        <li>Customizing CSS</li>
                                        <li>Creadits</li>
                                        <li>Changelog</li>
                                        <li>Bootstrap</li>
                                        <li>Theme</li>
                                    </ul>
                                </div>
                            </div>}
                        </ul>
                    </div>
                    <span><input type="search" placeholder='   Search' /><AiOutlineSearch /></span>
                    <div className='right2'>
                        <span><BsPerson /></span>
                        <span><AiOutlineHeart /></span>
                        <span><Link to='toBasket'><BsBasket style={{ color: "black", width: "24px", height: "24px" }} /></Link></span>
                        <span><GiHamburgerMenu /></span>
                    </div>
                </div>
            </div>


            {/* Responsiv */}

            <div className='responsiv'>
                <div>
                    <h1>Varkala</h1>
                    <div>
                        <BsPerson />
                        <AiOutlineHeart />
                        <Link to='toBasket' style={{ color: "black", width: "24px", height: "30px", marginLeft: "12px" }} ><BsBasket style={{ width: "25px", height: "25px" }} /></Link>
                    </div>
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div><GiHamburgerMenu id='bst' /></div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='resPanel'>
                                <div>
                                    <ul>Home</ul>
                                    <ul>Shop</ul>
                                    <ul>Icons</ul>
                                    <ul>Pages</ul>
                                    <ul>Docs</ul>
                                    <input type='search'></input>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>
    )

}


export default Navbar

