import React from "react";
import Logo from "./teeny_logo.png";
import Modal from "../Modal/modal";
  // unsure how to join modal and header components together
import "./header.css";

 function Header () {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo"><img src={Logo} className="responsive-img"  alt="A tiny blue suitcase with a sock and heart boxers bursting out represents the logo of travelRush" style={{ maxWidth: '150px' }} /></a>
                        <a href="#!" className="brand-logo center">travelRush</a>
                        <ul className="right hide-on-med-and-down">
                        <li><Modal /></li>
                            {/* <li><a href="#!">LOGIN</a></li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }


export default Header;
//index.js:1437 Warning: Invalid value for prop `href` on <a> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://fb.me/react-attribute-behavior
// in a (at header.js:14)
// in li (at header.js:14)
// in ul (at header.js:13)
// in div (at header.js:10)
// in nav (at header.js:9)
// in div (at header.js:8)
// in Header (at App.js:30)








