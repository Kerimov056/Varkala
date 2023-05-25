import React,{useState, useEffect} from 'react'
import axios from 'axios';
import './blogs.scss'
import Cartblog from './Cartblog'

const Blogs = () => {

    const [info, setInfo] = useState([])

    useEffect(()=>{
        try{
            const getAll = async () =>{
                const response = await axios.get('http://localhost:3001/products')
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
                        {
                            info.map((item)=>{
                                return <Cartblog key={item.id} imgurl={item.imgurl} name={item.name}/>
                            })
                        }
                    </div>
            </div>
        </>
    )
}

export default Blogs