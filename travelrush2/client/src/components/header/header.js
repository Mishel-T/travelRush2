import React from "react";

 function Header () {
        return (
            <div>
                <ul id="dropdown1" className="dropdown-content">
                    <li><a href="#!">one</a></li>
                    <li><a href="#!">two</a></li>
                    <li className="divider" />
                    <li><a href="#!">three</a></li>
                </ul>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo"><img className="responsive-img" src="assets/images/travelRush-logo.png" style={{ maxWidth: '150px' }} /></a>
                        <a href="#!" className="brand-logo center">travelRush</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#">LOGIN</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }


export default Header;









