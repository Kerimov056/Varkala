import React, { createContext } from 'react'
import { Homecart } from '../Helpers/Homecart'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}

    for (let i = 0; i < Homecart.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

const ShopC = () => {
    
    const contextValue = {
        getDefaultCart,
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