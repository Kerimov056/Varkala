import React from 'react'
import './about.scss'


const Aboutapi = ({imgurl,name,job}) => {
  return (
    <>
        <div className='jobb'>
            <div className='jobb_img'>
                <img src={imgurl}></img>
            </div>
            <div className='jobb_text'>
                <h2>{name}</h2>
                <h3>{job}</h3>
            </div>
        </div>
    </>
  )
}

export default Aboutapi