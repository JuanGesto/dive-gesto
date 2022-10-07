import React, { useState } from "react";
import { Link } from "react-router-dom";

import CollapseMenu from "./CollapseMenu";
import CartWidget from "./CartWidget";

const NavBar = ({categories}) => {
    const [category, setCategory] = useState("");
    const [collapsed, setCollapsed] = useState(false)

    function show(show) {
        setCategory(show)
    }
    function collapseShow() {
        if (collapsed === false) {
            setCollapsed(true)
        }
    }
    function collapseHide() {
        if (collapsed === true) {
            setCollapsed(false)
        }
    }

    return (
            <>
                <div onMouseLeave={()=>{collapseHide()}}>
                    <nav id="navbar">
                        <Link to={"/"} id="logo">
                            <img
                                src="https://res.cloudinary.com/dss1do1r6/image/upload/v1662510099/Dive/logo_xf7mi7.svg"
                                alt="DIVE"
                            />
                        </Link>
                        <ul id="productsNav">
                            {categories.map((category) => {
                                return (
                                    <li
                                        key={category.name.toLowerCase()}
                                        onMouseOver={() => show((category.name))}
                                        onMouseEnter={collapseShow}>
                                        <a
                                            id={category.name.toLowerCase()}
                                            className="btn btn-light"
                                            data-toggle="collapse"
                                            href="collapseMenu"
                                            role="button"
                                            aria-expanded="false"
                                            aria-controls="collapseMenu">
                                            {category.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>

                        <ul id="searchNav">
                            <li>
                                <a
                                    className="btn btn-light"
                                    href="javascript:void(0);">
                                    Support
                                </a>
                            </li>
                            <li>
                                <a
                                    className="btn btn-light"
                                    href="javascript:void(0);">
                                    <span className="material-symbols-outlined">
                                        search
                                    </span>
                                </a>
                            </li>
                            <li>
                                <CartWidget />
                            </li>
                        </ul>
                    </nav>
                    <CollapseMenu categories={categories} category={category} collapsed={collapsed}/>
                </div>
                <div className={collapsed ? "black" : "transparent"} id="divider"></div>
            </>
    );
};

export default NavBar;
