import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <>
            {items.map((item) => {
                return (
                    <Item item={item} key={item.id}/>
                );
            })}
        </>
    );
};

export default ItemList;
