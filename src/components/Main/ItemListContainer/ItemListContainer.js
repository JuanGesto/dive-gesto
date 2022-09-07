import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { products } from "./products";

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);

    const { categoryName } = useParams();

    useEffect(() => {
        const getProducts = () =>
            new Promise((res, rej) => {
                const prodFiltrados = products.filter(
                    (prod) => prod.category === categoryName
                );
                setTimeout(() => {
                    res(categoryName ? prodFiltrados : products);
                }, 500);
            });
        getProducts()
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryName]);

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