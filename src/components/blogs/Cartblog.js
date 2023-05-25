import React,{useEffect} from 'react'
import './blogs.scss'
import AOS from "aos";
import "aos/dist/aos.css";


const Cartblog = ({imgurl,name}) => {

    useEffect(() => {
        AOS.init({
            offset: 630,
            duration: 500,
            delay: 60,
        });
        AOS.refresh();
    }, []);

  return (
    <>
        <div data-aos="zoom-in" className='cart'>
            <div className='cart_img'>
                <img src={imgurl}></img>
            </div>
            <div className='cart_text'>
                <h1>{name}</h1>
                <div>
                <span className='fashion'>FASHION AND STYLE</span>
                <span className='month'>January 16, 2019</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cartblog