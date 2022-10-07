import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ItemListContainer = ({}) => {
    const [items, setItems] = useState([]);
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const itemCollection = collection(db, "products");
        const q = query(itemCollection, where("category", "==", "" + id + ""));

        getDocs(id ? q : itemCollection)
            .then((data) => {
                setItems(
                    data.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
                );
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false)
            });

        return () => {
            setIsLoading(true)
        }
    }, [id]);

    return (
        <>
            <section id="featured">
                {isLoading ? (
                    <h2 className="loading"></h2>
                ) : (
                    <div id="ItemList">
                        <ItemList items={items} />
                    </div>
                )}
            </section>
        </>
    );
};

export default ItemListContainer;
