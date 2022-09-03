import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "./products";

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProducts = new Promise((res, rej) => {
        res(products);
        });

        getProducts
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <section id="featured">
                <h2>{saludo}</h2>
                <div id="ItemList">
                    <ItemList items={items} />
                </div>
            </section>
        </>
    );
};

export default ItemListContainer;
