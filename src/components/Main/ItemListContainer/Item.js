import React from "react";
import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
        <Link to={`/detail/${item.id}`} className="card card-body featuredItem" style={{textDecoration: "none", color: "black"}}>
            <img src={item.colors[0].imgs[0].img} alt="" />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
        </Link>
    );
};

export default Item;
