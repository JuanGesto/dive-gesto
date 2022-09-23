import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { CartContext } from "../../../context/CartContext";

const Checkout = () => {
    const { cart, cartTotal, cartCount, clear } = useContext(CartContext);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [purhcaseId, setPurchaseId] = useState("");
    const shipping = cartTotal > 399 ? 0 : 24;
    const [total] = useState(cartTotal);
    const [count] = useState(cartCount);

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            buyer: {
                name: name,
                lastName: lastName,
                phone: phone,
                email: email,
            },
            items: cart,
            total: cartTotal,
            date: serverTimestamp(),
        };

        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((res) => {
            setPurchaseId(res.id);
            clear();
        });
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };
    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    if (count === 0) {
        return (
            <div id="emptyCart">
                <h3
                    style={{
                        fontSize: "1.5em",
                        textDecoration: "none",
                        color: "white",
                    }}>
                    Your cart is empty
                </h3>
                <Link to={`/`} className="btn btn-light">
                    Go to home page
                </Link>
            </div>
        );
    }

    return (
        <div id="checkoutContainer" className="card-body">
            <div className="card" id="checkout">
                <form action="" onSubmit={handleSubmit} id="form">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        readOnly={cart.length === 0 ? true : false}
                        onChange={handleChangeName}
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        required
                        readOnly={cart.length === 0 ? true : false}
                        onChange={handleChangeLastName}
                    />
                    <label htmlFor="phone">Phone number</label>
                    <input
                        type="number"
                        name="phone"
                        value={phone}
                        readOnly={cart.length === 0 ? true : false}
                        onChange={handleChangePhone}
                    />
                    <label htmlFor="email">email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        readOnly={cart.length === 0 ? true : false}
                        onChange={handleChangeEmail}
                    />
                </form>

                <div id="summary">
                    <div>
                        <h3>Purchase summary</h3>
                        <div className="summaryRow">
                            <p>
                                Products {`(`}
                                {count}
                                {`)`} :
                            </p>
                            <p>${total}</p>
                        </div>
                        <div className="summaryRow">
                            <p>Shipping:</p>
                            <p>{shipping === 0 ? "Free" : "$" + shipping}</p>
                        </div>
                        <div className="summaryRow">
                            <p>Total:</p>
                            <p>${total + shipping}</p>
                        </div>
                    </div>

                    {(count !== 0) & (cart.length === 0) ? (
                        <div>
                            <h4>Order placed</h4>
                            <p>Your order ID is: {purhcaseId}</p>
                        </div>
                    ) : (
                        <div>
                            <button form="form" className="btn btn-light">
                                Place order
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Checkout;
