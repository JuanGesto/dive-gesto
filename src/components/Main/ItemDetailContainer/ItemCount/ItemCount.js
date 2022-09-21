import React, { useState } from "react";

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);

    if (count > props.stock) {
        setCount(props.stock)
    }

    const sumar = () => {
        if (count < props.stock) {
            setCount(count + 1);
        }
    };
    const restar = () => {
        if (count > props.initial) {
            setCount(count - 1);
        }
    };

    return (
        <div id="countContainer">
            <div id="count">
                <button onClick={restar} className="btn, btn-light">
                    -
                </button>
                <p className="btn, btn-light">{count}</p>
                <button onClick={sumar} className="btn, btn-light">
                    +
                </button>
            </div>
            <button onClick={()=> props.onAdd(count)} className="btn, btn-light" id="addToCart">
                Add to cart
            </button>
        </div>
    );
};

export default ItemCount;
