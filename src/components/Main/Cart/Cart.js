import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clear, removeItem } = useContext(CartContext);

    return (
        <div className="card card-body">
            {cart.map((item) => {
                return (
                    <div key={item.id} >
                        <div>
                            <Link to={`/detail/${item.id}`} style={{fontSize: "1.5em", textDecoration: "none", color: "black"}}>{item.title}</Link>
                            <p>Quantity: {item.quantity} | Price: ${item.price} | Total: ${item.price * item.quantity}</p>
                            <button onClick={()=>removeItem(item.id)} className="btn btn-light">Remove</button>
                        </div>
                    </div>
                );
            })}
            <button onClick={clear} className="btn btn-light">
                Clear Cart
            </button>
        </div>
    );
};

export default Cart;
