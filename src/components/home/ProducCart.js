import React, { useState } from 'react';
import './home.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { FaFacebookF } from 'react-icons/fa';
import { BsChevronUp } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { HiChevronUp } from 'react-icons/hi';
import { GoChevronDown } from 'react-icons/go';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import Modal from 'react-modal';

const ProductCart = ({id,imgurl,name,price}) => {
    const [open, setOpen] = useState(false);
    const [img, setImg] = useState('https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/detail-1-gray.jpg');

    const [size, setSize] = useState(false)

    const [olcu, setOlcu] = useState('SMALL')

    const changeImg = (src) => {
        setImg(src);
    };

    return (
        <>
            <div className='mehsul'>
                <div className='mehsul_up'>
                    <div>
                        <img src={imgurl} alt="Product"></img>
                        <div className='addToCart'>
                            <div>
                                <h4>Add to cart</h4>
                                <div>
                                    <span><AiOutlineHeart /></span>
                                    <span className='add'><AiOutlineFullscreen onClick={() => setOpen(true)} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mehsul_low'>
                    <h4>{name}</h4>
                    <div>
                        <span className='qiymet'>${price}</span>
                        <span className='star'>
                            <AiFillStar style={{ color: "#bcac76" }} />
                            <AiFillStar style={{ color: "#bcac76" }} />
                            <AiFillStar style={{ color: "#bcac76" }} />
                            <AiFillStar style={{ color: "rgb(132, 132, 132)" }} />
                            <AiFillStar style={{ color: "rgb(132, 132, 132)" }} />
                        </span>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={open}
                onRequestClose={() => setOpen(false)}
                style={{
                    overlay: {
                        background: "rgb(132, 132, 132)"
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    }
                }}
            >
                <div className='popup'> 
                    <button onClick={()=>setOpen(false)} className='exit'>X</button>
                    <div>
                        <div className='pop_left'>
                            <div className='pop_left_img'>
                                <img src={img} alt="Selected Image"></img>
                            </div>
                            <div className='pop_left_imgs'>
                                <img onClick={() => changeImg('https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/detail-1-gray.jpg')} src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/detail-1-gray.jpg' alt="Thumbnail 1"></img>
                                <img onClick={() => changeImg('https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/detail-2-gray.jpg')} src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/detail-2-gray.jpg' alt="Thumbnail 2"></img>
                                <img onClick={() => changeImg('https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/detail-3-gray.jpg')} src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/detail-3-gray.jpg' alt="Thumbnail 3"></img>
                                <img onClick={() => changeImg('https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/detail-4-gray.jpg')} src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/detail-4-gray.jpg' alt="Thumbnail 4"></img>
                                <img onClick={() => changeImg('https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/detail-5-gray.jpg')} src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/detail-5-gray.jpg' alt="Thumbnail 5"></img>
                            </div>
                        </div>

                        <div className='pop_right'>
                            <div className='mehsul_info'>
                                <h1>Push-up Jeans</h1>
                                <div>
                                    <div className='mehsul_info_price'>
                                        <h2>$65.00</h2>
                                        <p>$90.00</p>
                                    </div>
                                    <div className='mehsul_info_star'>
                                        <AiFillStar style={{ color: "#bcac76" }} />
                                        <AiFillStar style={{ color: "#bcac76" }} />
                                        <AiFillStar style={{ color: "#bcac76" }} />
                                        <AiFillStar style={{ color: "rgb(132, 132, 132)" }} />
                                        <AiFillStar style={{ color: "rgb(132, 132, 132)" }} />
                                        <span>25 REVIEWS</span>
                                    </div>
                                </div>
                                <p>Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
                            </div>

                            <div className='mehsul_section'>
                                <div className='mehsul_section_size'>
                                    Size
                                    <span>(required)</span>
                                </div>

                                <div className='small'>
                                    <button style={{ backgroundColor: size === true ? "rgb(132, 132, 132)" : "white" }} onClick={() => setSize((prev) => !prev)}>{olcu}
                                        {size ? (
                                            <BsChevronUp />
                                        ) : (
                                            <FiChevronDown />
                                        )}
                                    </button>
                                    {size && <div className='sizeDrop'>
                                        <ul>
                                            <li style={{color: olcu === 'SMALL'? "#bcac76" : "rgb(136, 134, 134)"}}
                                                onClick={() => {
                                                setOlcu('SMALL')
                                                setSize(false)
                                            }}>Small</li>
                                            <li style={{color: olcu === 'MEDIUM'? "#bcac76" : "rgb(136, 134, 134)"}}
                                                onClick={() => {
                                                setOlcu('MEDIUM')
                                                setSize(false)
                                            }}>Medium</li>
                                            <li style={{color: olcu === 'LARGE'? "#bcac76" : "rgb(136, 134, 134)"}}
                                                onClick={() => {
                                                setOlcu('LARGE')
                                                setSize(false)
                                            }}>Large</li>
                                        </ul>
                                    </div>}
                                </div>

                                <div className='mehsul_section_size2'>
                                    Type
                                    <span>(required)</span>
                                </div>

                                <div className='two-btn'>
                                    <button>HOOIDE</button>
                                    <button>COLLEGE</button>
                                </div>
                            </div>

                            <div className='popADD'>
                                <div>
                                    <input type='text' value='0' />
                                    <div>
                                        <HiChevronUp />
                                        <GoChevronDown className='asd' />
                                    </div>
                                </div>
                                <button><SlBasket /> ADD TO CART</button>
                            </div>

                            <div className='popEnd'>
                                <div className='popEnd_up'>
                                    <h1><AiOutlineHeart />Add to wishlist</h1>
                                    <b><FaFacebookF /><AiOutlineTwitter /></b>
                                </div>
                                <div className='popEnd_low'>
                                    <h1>Category: <span>Jeans</span></h1>
                                    <h1>Tags:<span>Leisure, Elegant</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ProductCart;
