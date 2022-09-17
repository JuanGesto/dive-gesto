import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clear, removeItem, cartCount, cartTotal } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div id="emptyCart">
                <h3 style={{fontSize: "1.5em", textDecoration: "none", color: "white"}}>Your cart is empty</h3>
                <Link to={`/`} className="btn btn-light">Go to home page</Link>
            </div>
        )
    }

    return (
        <div id="cartContainer" className="card card-body">
            <h2>Your cart</h2>
            <div className="columns">
                <p className="cartItem">Product</p>
                <p className="quantity">Quantity</p>
                <p className="price">Total</p>
            </div>
            {cart.map((item) => {
                return (
                    <div className="cartItemContainer" key={item.id} >
                        <Link to={`/detail/${item.id}`} id="cartTitle" className="cartItem"><img src={item.colors[0].imgs[0].img} alt="" /><h3>{item.title}</h3></Link>
                        <p className="quantity">{item.quantity}</p>
                        <p className="price">${item.price}</p>
                        <div onClick={()=>removeItem(item.id)} className="remove"><p>Remove</p></div>
                    </div>
                );
            })}

            <div className="total">
                <p className="cartItem">Total</p>
                <p className="quantity">{cartCount}</p>
                <p className="price">${cartTotal}</p>
                <div onClick={clear} className="remove"><p>Clear Cart</p></div>
            </div>

            <div id="cartBtns">
                <Link to={`/`} className="btn btn-light"><p>Keep shopping</p></Link>
                <Link to={``} className="btn btn-light"><p>Finish purchase</p></Link>
            </div>
        </div>
    );
};

export default Cart;
