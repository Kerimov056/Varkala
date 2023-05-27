import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

const ProducCart = () => {
  return (
    <>
        <div>
            <div>
                <div>
                    <img src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair.jpg'></img>
                </div>
                <div>
                    <div>
                        <div>
                            <h4>Add to cart</h4>
                            <div>
                                <span><AiOutlineHeart/></span>
                                <span><AiOutlineFullscreen/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h4>Norwegg Chair</h4>
                </div>
                <div>
                    <span>$40</span>
                    <span>
                        <AiFillStar style={{color: "#bcac76"}}/>
                        <AiFillStar style={{color: "#bcac76"}}/>
                        <AiFillStar style={{color: "#bcac76"}}/>
                        <AiFillStar/>
                        <AiFillStar/>
                    </span>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProducCart