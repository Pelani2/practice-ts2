import React from "react";
import Typography from "../Typography";
import { Link } from "react-router-dom";

const NavigationBar: React.FC = () => {
    return (
        <nav className="navigation-bar">
            <ul className="navigation-bar__list">
                <li className="navigation-bar__list-item">
                    <Link to="/">
                        <Typography variant="nav-link">
                            Home
                        </Typography>
                    </Link>
                </li>
                <li className="navigation-bar__list-item">
                    <Link to="/about">
                        <Typography variant="nav-link">
                            About
                        </Typography>
                    </Link>
                </li>
                <li className="navigation-bar__list-item">
                    <Link to="/services">
                        <Typography variant="nav-link">
                            Services
                        </Typography>
                    </Link>
                </li>
                <li className="navigation-bar__list-item">
                    <Link to="/contact">
                        <Typography variant="nav-link">
                            Contact
                        </Typography>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;