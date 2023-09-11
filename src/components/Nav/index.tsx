import React from "react";
import { Link } from "react-router-dom";
import "./nav-styles.scss";

const NavigationBar: React.FC = () => {
    return (
        <nav className="navigation-bar">
            <ul className="navigation-bar__list">
                <li className="navigation-bar__list-item">

                </li>
                <li className="navigation-bar__list-item">
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li className="navigation-bar__list-item">
                    <Link to="/services">
                        Services
                    </Link>
                </li>
                <li className="navigation-bar__list-item">
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;