import React from 'react'
import './tobasket.scss'

const BsketCart = () => {
  return (
    <>
        <div className='dowlandProduct'>
            <img src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/product-square-ian-dooley-347968-unsplash.jpg'></img>
            <div>
                <h4>Skull Tee</h4>
                <p className='sizeL'>Size: Large</p>
                <p>Colour: Green</p>
            </div>
            <span className='oneSpan'>$65.00</span>
            <p>-</p>
            <input value="4"></input>
            <p>+</p>
            <span className='close'>X</span>
       </div>
    </>
  )
}

export default BsketCart