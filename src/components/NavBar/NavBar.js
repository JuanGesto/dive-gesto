import React from "react";
import CollapseMenu from "../CollapseMenu/CollapseMenu";

const NavBar = () => {
    {/* Este codigo maneja el collapse del navbar*/}
    let collapsed = false;
    function show(show, hide1, hide2, hide3) {
        document.getElementById(hide1).classList.remove("d-block");
        document.getElementById(hide2).classList.remove("d-block");
        document.getElementById(hide3).classList.remove("d-block");
        document.getElementById(show).classList.add("d-block");
    }
    function collapseShow() {
        document.getElementById("collapsingMenu").classList.add("collapseShow");
        document.getElementById("collapsingMenu").classList.remove("collapseHide");
        collapsed = true;
    }
    function collapseHide() {
        if (collapsed === true) {
            document.getElementById("collapsingMenu").classList.add("collapseHide");
            document.getElementById("collapsingMenu").classList.remove("collapseShow");
            collapsed = false;
        }
    }

    return (
        <>
            <header id="header" onMouseLeave={collapseHide}>
                <nav id="navbar">
                    <img src="media/images/logo.svg" alt="DIVE" />

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
                            <a
                                className="btn btn-light"
                                href="javascript:void(0);">
                                <span className="material-symbols-outlined">
                                    shopping_cart
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <CollapseMenu />
            </header>
        </>
    );
};

export default NavBar;
