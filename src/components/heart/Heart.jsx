import React, { useContext } from 'react'
import ProductCart from '../home/ProducCart'
import { Homecart } from '../Helpers/Homecart'
import { ShopContext } from '../content/ShopC'
import './heart.scss'

const Heart = () => {

    const { heartt } = useContext(ShopContext);

    return (
        <>
            <div className='heart'>
                <div>
                    <h1>Products you <span>like</span></h1>
                    <div>
                        {
                            Homecart.map((product) => {
                                if (heartt[product.id] !== 0) {
                                    return <ProductCart id={product.id} imgurl={product.img} name={product.name} price={product.price} category={product.category} color={product.color} />
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heart