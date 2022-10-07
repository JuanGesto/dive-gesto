import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
    const {cartCount} = useContext(CartContext)
    return (
            <Link
                to={"/cart"}
                className="btn btn-light"
                id="cartButton">
                <span className="material-symbols-outlined">shopping_cart</span>
                {cartCount > 0 ? <span id="cartCount">{cartCount}</span> : ""}
            </Link>
    );
};

export default CartWidget;
