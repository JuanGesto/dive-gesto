import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

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
                ? { ...prod, quantity: prod.quantity + quantity }
                : prod
        );
        setCart(newCart);
    };

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !==id))
    }

    const clear = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
