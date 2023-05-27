import React from 'react'
import './home.scss'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

const ProducCart = () => {
    return (
        <>
            <div className='mehsul'>
                <div className='mehsul_up'>
                    <div className='mehsul_img'>
                        {/* <img src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair.jpg'></img> */}
                    </div>
                    <div className='addToCart'>
                        <div>
                            <h4>Add to cart</h4>
                            <div>
                                <span><AiOutlineHeart /></span>
                                <span><AiOutlineFullscreen /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mehsul_low'>
                        <h4>Norwegg Chair</h4>
                    <div>
                        <span className='qiymet'>$40</span>
                        <span className='star'>
                            <AiFillStar style={{ color: "#bcac76" }} />
                            <AiFillStar style={{ color: "#bcac76" }} />
                            <AiFillStar style={{ color: "#bcac76" }} />
                            <AiFillStar />
                            <AiFillStar />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProducCart