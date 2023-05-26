import React,{useState, useEffect} from 'react'
import axios from 'axios';
import './blogs.scss'
import Cartblog from './Cartblog'
import { BsChevronRight } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';

const Blogs = () => {

    const [info, setInfo] = useState([])

    useEffect(()=>{
        try{
            const getAll = async () =>{
                const response = await axios.get('http://localhost:3003/products')
                setInfo(response.data)
            }
            getAll()
        }
        catch(error){
            console.error(error)
        }
    })

    return (
        <>
            <div className='blog'>
                <div>
                    <div>   
                        <h1>Blog</h1>
                        <h3>As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am </h3> 
                        <h3 className='h33'>he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</h3>
                    </div>
                </div>
            </div>
            <div className='carts'>
                    <div className='carts_in'>
                       <div className='carts_in_in'>
                       {
                            info.map((item)=>{
                                return <Cartblog key={item.id} imgurl={item.imgurl} name={item.name}/>
                            })
                        }
                       </div>
                        <div className='low'>
                            <button className='Older'><span><BsChevronLeft/></span>Older posts</button>
                            <button className='Newer'>Newer posts<span><BsChevronRight/></span></button>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Blogs 