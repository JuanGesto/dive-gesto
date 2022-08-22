import React from "react";

const CollapseMenu = () => {

    return (
            <div className="card card-body" id="collapsingMenu">
                <div id="ulMobile" className="d-none">
                    <h2>Mobile</h2>
                    <ul>
                        <li className="btn btn-light">
                            <a href="javascript:void(0);">Smartphones</a>
                            <div></div>
                        </li>
                        <li className="btn btn-light">
                            <a href="javascript:void(0);">Tablets</a>
                            <div></div>
                        </li>
                        <li className="btn btn-light">
                            <a href="javascript:void(0);">Watches</a>
                            <div></div>
                        </li>
                        <li className="btn btn-light">
                            <a href="javascript:void(0);">Accesories</a>
                            <div></div>
                        </li>
                    </ul>
                </div>

                <div id="ulAudio" className="d-none">
                    <h2>Audio</h2>
                    <ul>
                        <li className="btn btn-light">
                            <a href="javascript:void(0);">Sound devices</a>
                            <div></div>
                        </li>
                        <li className="btn btn-light">
                            <a href="javascript:void(0);">Headphones</a>
                            <div></div>
                        </li>
                        <li className="btn btn-light">
                            <a href="javascript:void(0);">Earbuds</a>
                            <div></div>
                        </li>
                    </ul>
                </div>

                <div id="ulTV" className="d-none">
                    <h2>TV</h2>
                    <ul>
                        <li className="btn btn-light">
                            <a href="javascript:void(0);">TVs</a>
                            <div></div>
                        </li>
                        <li className="btn btn-light">
                            <a href="javascript:void(0);">Projectors</a>
                            <div></div>
                        </li>
                    </ul>
                </div>

                <div id="ulComputing" className="d-none">
                    <h2>Computing</h2>
                    <ul>
                        <li className="btn btn-light">
                            <a href="javascript:void(0);">Wave Books</a>
                            <div></div>
                        </li>
                        <li className="btn btn-light">
                            <a href="javascript:void(0);">Computer monitors</a>
                            <div></div>
                        </li>
                    </ul>
                </div>
            </div>
    );
};

export default CollapseMenu;
