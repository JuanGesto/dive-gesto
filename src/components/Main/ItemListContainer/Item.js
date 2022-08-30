import React from "react";

const Item = ({item}) => {
    return (
        <div className="card card-body" key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.img} alt="" />
            <p>${item.price}</p>
        </div>
    );
};

export default Item;
