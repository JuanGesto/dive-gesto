import React from "react";

const Item = ({item}) => {
    return (
        <div className="card card-body featuredItem">
            <h3>{item.title}</h3>
            <img src={item.colors[0].imgs[0].img} alt="" />
            <p>${item.price}</p>
        </div>
    );
};

export default Item;
