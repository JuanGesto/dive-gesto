import React, { useEffect } from "react";
import ItemCount from "./ItemCount/ItemCount";

const ItemDetail = ({ item }) => {

    const onAdd = () => {
        alert("Se agregó al carrito");
    };

    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".activeSlide").classList.add("active");
            document.querySelector(".activeIndicator").classList.add("active");
        }, 1000);
    },[]);


    let color = 0;
    let colors;
    function selectColor(newColor) {
        color = newColor
        colors = item.colors[color]
        console.log(color)
    }

    return (
        <div id="itemDetail" className="card card-body">
                <div id="itemDetailCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                                    {colors.imgs?.map((imgs) => {
                                        return (
                                            <li data-target="#itemDetailCarousel" data-slide-to={imgs.id} className="activeIndicator h-100" key={colors.id+imgs.id}>
                                                <img src={imgs.img} alt="" className="d-block w-100"/>
                                            </li>
                                        );
                                    })}
                    </ol>

                    {item.colors?.map((colors) => {
                        return (
                            <div className="carousel-inner w-100">
                                {colors.imgs?.map((imgs) => {
                                    return (
                                        <div className="carousel-item activeSlide">
                                            <img src={imgs.img} alt="" key={imgs.id}/>
                                        </div>
                                    );
                                })}
                            </div>
                        )
                    })}

                    <a className="carousel-control-prev" href="#itemDetailCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#itemDetailCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            <div>
                <h3>{item.title}</h3>
                <h4>${item.price}</h4>
                <ul className="colors">
                    {item.colors?.map((colors) => {
                        return <li className="color" style={{ backgroundColor: colors.colorN }} key={colors.id} onClick={()=>{selectColor(colors.id)}} ></li>
                    })}
                </ul>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;

/*



*/
