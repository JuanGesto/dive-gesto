import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../ItemListContainer/products";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                const unicoProducto = products.find((prod)=> prod.id === 0)
                    res(unicoProducto);
            });
        getProduct()
        .then((data)=>{
            setItem(data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, []);

    return (
        <div id="itemDetailContainer">
            <ItemDetail item={item}/>
        </div>
    );
};

export default ItemDetailContainer;
