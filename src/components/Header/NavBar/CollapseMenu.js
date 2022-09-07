import React from "react";
import { Link } from "react-router-dom";

const CollapseMenu = () => {

    return (
            <div className="card card-body" id="collapsingMenu">
                <div id="ulMobile" className="d-none">
                    <h2>Mobile</h2>
                    <ul>
                        <li className="btn btn-light">
                            <Link to={"/category/smartphones"}>Smartphones</Link>
                            <div></div>
                        </li>
                        <li className="btn btn-light">
                            <Link to={"/category/tablets"}>Tablets</Link>
                            <div></div>
                        </li>
                        <li className="btn btn-light">
                            <Link to={"/category/watches"}>Watches</Link>
                            <div></div>
                        </li>
                        <li className="btn btn-light">
                            <Link to={"/category/accesories"}>Accesories</Link>
                            <div></div>
                        </li>
                    </ul>
                </div>

                <div id="ulAudio" className="d-none">
                    <h2>Audio</h2>
                    <ul>
                        <li className="btn btn-light">
                            <Link to={"/category/soundDevices"}>Sound devices</Link>
                            <div></div>
                        </li>
                        <li className="btn btn-light">
                            <Link to={"/category/headphones"}>Headphones</Link>
                            <div></div>
                        </li>
                        <li className="btn btn-light">
                            <Link to={"/category/earbuds"}>Earbuds</Link>
                            <div></div>
                        </li>
                    </ul>
                </div>

                <div id="ulTV" className="d-none">
                    <h2>TV</h2>
                    <ul>
                        <li className="btn btn-light">
                            <Link to={"/category/tvs"}>TVs</Link>
                            <div></div>
                        </li>
                        <li className="btn btn-light">
                            <Link to={"/category/projectors"}>Projectors</Link>
                            <div></div>
                        </li>
                    </ul>
                </div>

                <div id="ulComputing" className="d-none">
                    <h2>Computing</h2>
                    <ul>
                        <li className="btn btn-light">
                            <Link to={"/category/waveBooks"}>Wave Books</Link>
                            <div></div>
                        </li>
                        <li className="btn btn-light">
                            <Link to={"/category/computerMonitors"}>Computer monitors</Link>
                            <div></div>
                        </li>
                    </ul>
                </div>
            </div>
    );
};

export default CollapseMenu;
