import React from "react";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState (0);
    const [cartTotal, setCartTotal] = useState (0);

    const addItem = (item, quantity, colorId) => {
        if (isInCart(item.id, colorId)) {
            addMore(item, quantity, colorId)
        } else {
            setCart([...cart, { ...item, quantity, colorId }]);
        }
    };

    const isInCart = (id, colorId) => {
        return cart.some((prod) => prod.id === id & prod.colorId === colorId);
    };

    const addMore = (item, quantity, colorId) => {
        const newCart = cart.map((prod) =>
            prod.id === item.id
                ? prod.quantity + quantity > item.stock
                    ? { ...prod, quantity: item.stock, colorId }
                    : { ...prod, quantity: prod.quantity + quantity, colorId }
                : prod 
        );
        setCart(newCart);
    };

    const removeItem = (id, colorId) => {
        setCart(cart.filter((prod) => prod.id !==id | prod.colorId !==colorId));
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
