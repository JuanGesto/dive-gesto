import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import ItemCount from "./ItemCount/ItemCount";


const ItemDetail = ({ item, colorId }) => {
    const [quantity, setQuantity] = useState(0)
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        setQuantity(quantity)
        addItem(item, quantity, colorId)
    };

    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".carousel-item").classList.add("active");
        }, 550);
    },[]);



    return (
        <div id="itemDetail" className="card card-body">
            
            <div id="itemDetailCarousel" className="carousel" data-ride="carousel">
                <div id="carouselIndicatorsContainer">
                            <ol className="carousel-indicators">
                                {item?.colors?.[colorId]?.imgs?.map((imgs) => {
                                    return (
                                        <li data-target="#itemDetailCarousel" data-slide-to={imgs.id} className="activeIndicator" key={imgs.id}>
                                            <img src={imgs.img} alt="" />
                                        </li>
                                    )
                                })}
                            </ol>
                </div>
                    
                <div id="carousel">
                    <a className="carousel-control-prev carouselControl" href="#itemDetailCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    <div id="carouselContainer">
                                <div className="carousel-inner">
                                    {item?.colors?.[colorId]?.imgs?.map((imgs) => {
                                        return (
                                            <img className="carousel-item" src={imgs.img} alt="" key={imgs.id}/>
                                        );
                                    })}
                                </div>
                    </div>

                    <a className="carousel-control-next carouselControl" href="#itemDetailCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
            
            <div id="itemDetails">

                <div>
                    <h3>{item.title}</h3>
                    <h4>${item.price}</h4>
                </div>
                {item.colors?.length === 1 ? <></> : 
                <div>
                    <h5>Colors</h5>
                    <ul className="colors">
                        {item.colors?.map((colors) => {
                            return (
                                <Link to={"/detail/"+item.id+colors.id} key={colors.id}>
                                    <li className={"colorSelector" + (parseInt(colorId) === colors.id ? " colorSelected" : "")} style={{ backgroundColor: colors.colorN }}></li>
                                </Link>
                            )
                        })}
                    </ul>
                    <h5 id="colorName">{item.colors?.[colorId]?.color}</h5>
                </div>
                }
                {item.colors?.[colorId]?.stock === 0
                ? <div id="outOfStock">
                    <p>Out of stock</p>
                    <Link to={"/category/"+item.category}><button className="btn, btn-light" id="goToCart">Browse similar products</button></Link>
                </div>
                : quantity === 0
                    ? <ItemCount stock={item.colors?.[colorId]?.stock} initial={1} onAdd={onAdd}/>
                    : <Link to={"/cart"}><button className="btn, btn-light" id="goToCart">Go to cart</button></Link>
                }

            </div>
        </div>
    );
};

export default ItemDetail;