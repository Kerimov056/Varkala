import React from 'react'
import './blogs.scss'


const Cartblog = ({imgurl,name}) => {
  return (
    <>
        <div className='cart'>
            <div className='cart_img'>
                <img src={imgurl}></img>
            </div>
            <div className='cart_text'>
                <h1>{name}</h1>
                <span className='fashion'>FASHION AND STYLE</span>
                <span className='month'>January 16, 2019</span>
            </div>
        </div>
    </>
  )
}

export default Cartblog