import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../ItemListContainer/products";
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                const unicoProducto = products.find((prod)=> prod.id === parseInt(id))
                setTimeout(() => {
                    res(unicoProducto);
                }, 500);

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