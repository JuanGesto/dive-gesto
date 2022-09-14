import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
            <Link
                to={"/cart"}
                className="btn btn-light"
                id="cartButton">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span id="cartCount">2</span>
            </Link>
    );
};

export default CartWidget;
