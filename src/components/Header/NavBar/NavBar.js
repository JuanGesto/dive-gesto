import React from "react";
import { Link } from "react-router-dom";
import CollapseMenu from "./CollapseMenu";
import CartWidget from "./CartWidget";

const NavBar = () => {
    {
        /* Este codigo maneja el collapse del navbar*/
    }
    let collapsed = false;

    function show(show, hide1, hide2, hide3) {
        document.getElementById(hide1).classList.remove("d-block");
        document.getElementById(hide2).classList.remove("d-block");
        document.getElementById(hide3).classList.remove("d-block");
        document.getElementById(show).classList.add("d-block");
    }
    function collapseShow() {
        if (collapsed === false) {
            document
                .getElementById("collapsingMenu")
                .classList.add("collapseShow");
            document
                .getElementById("collapsingMenu")
                .classList.remove("collapseHide");
            document
            .getElementById("divider")
            .classList.add("black");
            document
                .getElementById("divider")
                .classList.remove("transparent");
            collapsed = true;
        }
    }
    function collapseHide() {
        if (collapsed === true) {
            document
                .getElementById("collapsingMenu")
                .classList.add("collapseHide");
            document
                .getElementById("collapsingMenu")
                .classList.remove("collapseShow");
            document
                .getElementById("divider")
                .classList.add("transparent");
            document
            .getElementById("divider")
            .classList.remove("black");
            collapsed = false;
        }
    }

    return (
        <>
            <header id="header">
                <div onMouseLeave={collapseHide}>
                    <nav id="navbar">
                        <Link to={"/"} id="logo">
                            <img
                                src="https://res.cloudinary.com/dss1do1r6/image/upload/v1662510099/Dive/logo_xf7mi7.svg"
                                alt="DIVE"
                            />
                        </Link>
                        <ul id="productsNav">
                            <li
                                onMouseOver={() =>
                                    show(
                                        "ulMobile",
                                        "ulAudio",
                                        "ulTV",
                                        "ulComputing"
                                    )
                                }
                                onMouseEnter={collapseShow}>
                                <a
                                    id="mobile"
                                    className="btn btn-light"
                                    data-toggle="collapse"
                                    href="#collapseMenu"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseMenu">
                                    Mobile
                                </a>
                            </li>
                            <li
                                onMouseOver={() =>
                                    show(
                                        "ulAudio",
                                        "ulMobile",
                                        "ulTV",
                                        "ulComputing"
                                    )
                                }
                                onMouseEnter={collapseShow}>
                                <a
                                    id="audio"
                                    className="btn btn-light"
                                    data-toggle="collapse"
                                    href="#collapseMenu"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseMenu">
                                    Audio
                                </a>
                            </li>
                            <li
                                onMouseOver={() =>
                                    show(
                                        "ulTV",
                                        "ulMobile",
                                        "ulAudio",
                                        "ulComputing"
                                    )
                                }
                                onMouseEnter={collapseShow}>
                                <a
                                    id="TV"
                                    className="btn btn-light"
                                    data-toggle="collapse"
                                    href="#collapseMenu"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseMenu">
                                    TV
                                </a>
                            </li>
                            <li
                                onMouseOver={() =>
                                    show(
                                        "ulComputing",
                                        "ulMobile",
                                        "ulAudio",
                                        "ulTV"
                                    )
                                }
                                onMouseEnter={collapseShow}>
                                <a
                                    id="computing"
                                    className="btn btn-light"
                                    data-toggle="collapse"
                                    href="#collapseMenu"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseMenu">
                                    Computing
                                </a>
                            </li>
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
                    <CollapseMenu />
                </div>
                <div className="transparent" id="divider"></div>
            </header>
        </>
    );
};

export default NavBar;
