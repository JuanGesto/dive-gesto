import React from "react";
import {
    BsFacebook,
    BsTwitter,
    BsInstagram,
    BsYoutube,
    BsFillEnvelopeFill,
} from "react-icons/bs";

const Footer = () => {
    return (
        <footer id="footer">
            <nav id="footerNav">
                <p>Copyright © 1995-2022 DIVE All rights reserved.</p>
                <ul>
                    <li>
                        <BsFacebook />
                    </li>
                    <li>
                        <BsTwitter />
                    </li>
                    <li>
                        <BsInstagram />
                    </li>
                    <li>
                        <BsYoutube />
                    </li>
                    <li>
                        <BsFillEnvelopeFill />
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
