import React, { useState } from 'react'
import './blogs.scss'
import Cartblog from './Cartblog'
import { BsChevronRight } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';
import { blogApi } from '../Helpers/Blogs'

const Blogs = () => {

    const [info, setInfo] = useState([])


    return (
        <>
            <div id='ResB' className='blog'>
                <div>
                    <div>
                        <h1>Blog</h1>
                        <h3>As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am </h3>
                        <h3 className='h33'>he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</h3>
                    </div>
                </div>
            </div>

            {/* responsiv */}

            <div id='ResBlog'>
                <div>
                    <img src='https://demo.bootstrapious.com/varkala/1-2-1/img/photo/blog-2.jpg'></img>
                    <div>
                        <h1>Blog</h1>
                        <h3>As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</h3>
                    </div>
                </div>
            </div>

            {/* responsiv */}

            <div className='carts'>
                <div className='carts_in'>
                    <div className='carts_in_in'>
                        {
                            blogApi.map((item) => {
                                return <Cartblog key={item.id} imgurl={item.img} name={item.name} />
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='low'>
                <button className='Older'><span><BsChevronLeft /></span>Older posts</button>
                <button className='Newer'>Newer posts<span><BsChevronRight /></span></button>
            </div>
        </>
    )
}

export default Blogs 