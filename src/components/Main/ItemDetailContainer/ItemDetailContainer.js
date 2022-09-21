import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id, colorId } = useParams();

    useEffect(() => {
        const itemCollection = collection(db, "products");
        const ref = doc(itemCollection, id);
        getDoc(ref).then((res) => {
            setItem({id: res.id, ...res.data()})
        });
    }, [colorId]);

    return (
        <div id="itemDetailContainer">
            <ItemDetail item={item} colorId={colorId} />
        </div>
    );
};

export default ItemDetailContainer;