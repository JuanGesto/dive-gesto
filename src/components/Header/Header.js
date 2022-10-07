import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import NavBar from "./NavBar/NavBar";

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const categoryCollection = collection(db, "categories");

        getDocs(categoryCollection)
            .then((data) => {
                setCategories(data.docs.map((cat) => ({ ...cat.data() })));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    
    return (
        <header id="header">
            <NavBar categories={categories}/>
        </header>
    )
};

export default Header;
