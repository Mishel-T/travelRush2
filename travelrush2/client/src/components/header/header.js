import React from "react";
import Logo from "./teeny_logo.png";
import Modal from "../Modal/modal";
import "./header.css";

 function Header () {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo"><img src={Logo} className="responsive-img"  alt="A tiny blue suitcase with a sock and heart boxers bursting out represents the logo of travelRush" style={{ maxWidth: '150px' }} /></a>
                        <a href="#!" className="brand-logo center">travelRush</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#!">LOGIN</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }


export default Header;









