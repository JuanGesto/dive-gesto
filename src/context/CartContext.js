import React from "react";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState (0);
    const [cartTotal, setCartTotal] = useState (0);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            addMore(item, quantity)
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const addMore = (item, quantity) => {
        const newCart = cart.map((prod) =>
            prod.id === item.id
                ? prod.quantity + quantity > item.stock
                    ? { ...prod, quantity: item.stock }
                    : { ...prod, quantity: prod.quantity + quantity }
                : prod 
        );
        setCart(newCart);
    };

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !==id));
    }

    const clear = () => {
        setCart([]);
    };
    
    useEffect(()=> {
            let newCartCount = 0;
            let newCartTotal = 0;
            cart.map((prod) =>
                (newCartCount += prod.quantity,
                newCartTotal += (prod.price * newCartCount))
            )
            console.log(newCartTotal)
            setCartCount(newCartCount)
            setCartTotal(newCartTotal)
    },[cart])

    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem, cartCount, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
