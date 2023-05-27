import React, { useState } from 'react'
import './home.scss'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import Modal from 'react-modal';
// import { Link } from "react-router-dom";


const ProducCart = () => {

    const [open, setOpen] = useState(false)

    const [img, setImg] = useState('https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/detail-2-gray.jpg')

    const ChangeImg = (img) => {
        
    }

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
                        <div className='pop_left'>
                            <div className='pop_left_img'>
                                <img src={img}></img>
                            </div>
                            <div className='pop_left_imgs'>
                                <img onClick={ChangeImg} src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/detail-1-gray.jpg'></img>
                                <img onClick={ChangeImg} src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/detail-2-gray.jpg'></img>
                                <img onClick={ChangeImg} src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/detail-3-gray.jpg'></img>
                                <img onClick={ChangeImg} src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/detail-4-gray.jpg'></img>
                                <img onClick={ChangeImg} src='https://d19m59y37dris4.cloudfront.net/varkala/1-2-1/img/product/detail-5-gray.jpg'></img>
                            </div>
                        </div>

                        <div className='pop_right'>

                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ProducCart


{/* <button onClick={() => setOpen(false)}>Close</button> */ }