import React from "react";
import { Link } from "react-router-dom";

const CollapseMenu = ({ categories, category, collapsed }) => {
    return (
        <div className={("card card-body ")+(collapsed ? "collapseShow" : "collapseHide")} id="collapsingMenu">
            {categories.map((cat) => {
                return (
                    <div
                        key={cat.name.toLowerCase()}
                        id={"ul" + cat.name}
                        className={category === cat.name ? "d-block" : "d-none"}>
                        <h2>{cat.name}</h2>
                        <ul>
                            {cat.subCategories?.map((subCat) => {
                                return (
                                    <li
                                        key={subCat.toLowerCase()}
                                        className="btn btn-light">
                                        <Link
                                            to={
                                                "/category/" +
                                                subCat.toLowerCase()
                                            }>
                                            {subCat}
                                        </Link>
                                        <div></div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default CollapseMenu;
