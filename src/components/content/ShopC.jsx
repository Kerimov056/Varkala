import React, { createContext, useState } from 'react'
import { Homecart } from '../Helpers/Homecart'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}

    for (let i = 0; i < Homecart.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

const ShopC = (props) => {

    const [cartitem,setCartItem] = useState()

    const addToCart = (itemId) => {
        setCartItem((prev) =>({...prev, [itemId]: prev[itemId] + 1}))
    }
    const RemoveCart = (itemId) => {
        setCartItem((prev) =>({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = {
        getDefaultCart,
        cartitem,
        addToCart,
        RemoveCart,
    }
    return (
        <>
            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
        </>
    )
}

export default ShopC