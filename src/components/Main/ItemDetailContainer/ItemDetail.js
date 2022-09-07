import React, { useEffect } from "react";
import ItemCount from "./ItemCount/ItemCount";

const ItemDetail = ({ item }) => {

    const onAdd = () => {
        alert("Se agregó al carrito");
    };

    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".activeSlide").classList.add("active");
            document.querySelector(".colorSelector").classList.add("colorSelected");
            document.querySelector(".carousel-indicators").classList.remove("invisible");
            document.querySelector(".carousel-indicators").classList.add("visible");
        }, 550);
    },[]);

    let colorNames = []
    let color = 0;
    let colors;
    function selectColor(newColor) {
        document.querySelector(".colorSelector:nth-child("+(color+1)+")").classList.remove("colorSelected");
        document.querySelector(".active").classList.remove("active");
        document.querySelector(".carousel-indicators:nth-child("+(color+1)+")").classList.add("invisible")
        color = newColor
        colors = item.colors[color]
        document.getElementById("colorName").innerHTML = colorNames[color];
        document.querySelector(".colorSelector:nth-child("+(color+1)+")").classList.add("colorSelected");
        document.querySelector(".carousel-inner:nth-child("+(color+1)+")").querySelector(".carousel-item").classList.add("active");
        document.querySelector(".carousel-indicators:nth-child("+(color+1)+")").classList.remove("invisible")
    }

    return (
        <div id="itemDetail" className="card card-body">
            
            <div id="itemDetailCarousel" className="carousel" data-ride="carousel">

                <div id="carouselIndicatorsContainer">
                    {item.colors?.map((colors) => {
                        return (
                            <ol className="carousel-indicators invisible" key={colors.id}>
                                {colors.imgs?.map((imgs) => {
                                    return (
                                        <li data-target="#itemDetailCarousel" data-slide-to={imgs.id} className="activeIndicator" key={imgs.id}>
                                            <img src={imgs.img} alt="" />
                                        </li>
                                    )
                                })}
                            </ol>
                        )
                    })}
                </div>
                    
                <div id="carousel">
                    <a className="carousel-control-prev carouselControl" href="#itemDetailCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    <div id="carouselContainer">
                        {item.colors?.map((colors) => {
                            return (
                                <div className="carousel-inner" key={colors.id}>
                                    {colors.imgs?.map((imgs) => {
                                        return (
                                            <img className="carousel-item activeSlide" src={imgs.img} alt="" key={imgs.id}/>
                                        );
                                    })}
                                </div>
                            )
                        })}
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
                <div>
                    <h5>Colors</h5>
                    <ul className="colors">
                        {item.colors?.map((colors) => {
                            colorNames.push(colors.color)
                            return <li className="colorSelector" style={{ backgroundColor: colors.colorN }} key={colors.id} onClick={()=>{selectColor(colors.id)}} ></li>
                        })}
                    </ul>
                    <h5 id="colorName">{colorNames[color]}</h5>
                </div>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;

/*



*/
