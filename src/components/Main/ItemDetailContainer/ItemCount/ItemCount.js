import React, { useState } from "react";

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
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
        <div id="count">
            <div>
                <button onClick={restar} className="btn, btn-light">
                    -
                </button>
                <p className="btn, btn-light">{count}</p>
                <button onClick={sumar} className="btn, btn-light">
                    +
                </button>
            </div>
            <button onClick={props.onAdd} className="btn, btn-light" id="addToCart">
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;