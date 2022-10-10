import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
    return (
        <>
            {items.length === 0 ? (
                <div id="noProducts">
                    <h3>There's nothing here</h3>
                    <Link to={"/"}>
                        <button className="btn btn-light">
                            Go back to home page
                        </button>
                    </Link>
                </div>
            ) : (
                items.map((item) => {
                    return <Item item={item} key={item.id} />;
                })
            )}
        </>
    );
};

export default ItemList;
