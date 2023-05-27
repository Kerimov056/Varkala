import React, { useState } from 'react'
import './home.scss'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import Modal from 'react-modal';
// import { Link } from "react-router-dom";


const ProducCart = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className='mehsul'>
                <div className='mehsul_up'>
                    <div>
                        <img src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/chair.jpg'></img>
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
                    <h4>Norwegg Chair</h4>
                    <div>
                        <span className='qiymet'>$40</span>
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


            <Modal isOpen={open} onRequestClose={() => setOpen(false)} style={{
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
                    <div>
                        <div>
                            
                        </div>
                        <div></div>
                    </div>

                    <div>solll</div>
                </div>
            </Modal>
        </>
    )
}

export default ProducCart


{/* <button onClick={() => setOpen(false)}>Close</button> */}