import React, { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
    const [vh, setVh] = useState(window.innerHeight);
    const [rootHeight, setRootHeight] = useState(
        document.querySelector("#root").offsetHeight
    );
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            setVh(window.innerHeight);
            setRootHeight(document.querySelector("#root").offsetHeight);
        }, 500);
    }, [location]);

    return rootHeight < vh * 1.5 ? (
        <></>
    ) : (
        <BsFillArrowUpCircleFill
            onClick={() => {
                window.scrollTo(0, 0);
            }}
            id="scrollTop"
        />
    );
};

export default ScrollTop;
