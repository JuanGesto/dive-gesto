import React from "react";

const CartWidget = () => {
    return (
            <a
                className="btn btn-light"
                id="cartButton"
                href="javascript:void(0);">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span id="cartCount">2</span>
            </a>
    );
};

export default CartWidget;
