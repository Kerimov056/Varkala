import { createContext, useState } from "react";
import { Homecart } from "../Helpers/Homecart";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < Homecart.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());


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


    const checkout = () => {
        setCartItems(getDefaultCart());
    };

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalAmount,
        checkout,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};


















// export const ShopContext = createContext(null)

// const getDefaultCart = () => {
//     let cart = {}

//     for (let i = 0; i < Homecart.length + 1; i++) {
//         cart[i] = 0
//     }
//     return cart
// }

// const ShopC = (props) => {

//     const [cartitem,setCartItem] = useState()

//     const addToCart = (itemId) => {
//         setCartItem((prev) =>({...prev, [itemId]: prev[itemId] + 1}))
//         console.log("varamm");
//     }
//     const RemoveCart = (itemId) => {
//         setCartItem((prev) =>({...prev, [itemId]: prev[itemId] - 1}))
//     }
//     const updateCartItemCount = (newAmount, itemId) => {
//         setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
//       };

//     const contextValue = {
//         getDefaultCart,
//         cartitem,
//         addToCart,
//         RemoveCart,
//         updateCartItemCount,
//     }
//     return (
//         <>
//             <ShopContext.Provider value={contextValue}>
//                 {props.children}
//             </ShopContext.Provider>
//         </>
//     )
// }

// export default ShopC