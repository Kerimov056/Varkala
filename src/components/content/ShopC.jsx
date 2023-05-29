import { createContext, useState, useEffect } from "react";
import { Homecart } from "../Helpers/Homecart";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < Homecart.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

// const cartFormLocalS = JSON.parse(localStorage.getItem("cartItems"))

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // useEffect(()=> {
    //     localStorage.setItem("cartItems",JSON.stringify(cartItems))
    // },[cartItems])

    const paket = () => {
        let sum = 0
        for (let i = 1; i < Homecart.length + 1; i++) {
            if (Homecart[i] == cartItems) {
                sum += 1;
            }
            return sum
        }
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = Homecart.find((products) => products.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price;
            }
            return totalAmount;
        }
    }

    const Total = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
              total += Homecart.find((products) => products.id === Number(item))
            }
        }
        return total;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(itemId);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };



    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };


    const checkout = (itemId) => {
        let itemInfo;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = Homecart.find((products) => products.id === Number(item))
                itemInfo = 0
                setCartItems(itemInfo)
            }
            return setCartItems(itemInfo)
        }
    };

    const empty_basket = () => {
        setCartItems(getDefaultCart());
    };

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalAmount,
        checkout,
        paket,
        empty_basket,
        Total,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}
