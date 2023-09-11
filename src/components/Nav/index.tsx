import React from "react";
import ListItem from "../ListItem";
import { Link } from "react-router-dom";
import "./nav-styles.scss";

const NavigationBar: React.FC = () => {
    return (
        <nav className="navigation-bar">
            <ul className="navigation-bar__list">
                <ListItem variant="nav-list-item">
                    <Link to="/">
                        Home                
                    </Link>
                </ListItem>

                <ListItem variant="nav-list-item">
                    <Link to="/contact">
                        Contact                    
                    </Link>
                </ListItem>

                <ListItem variant="nav-list-item">
                    <Link to="/services">
                        Services                    
                    </Link>
                </ListItem>

                <ListItem variant="nav-list-item">
                    <Link to="/about">
                        About                    
                    </Link>
                </ListItem>
            </ul>
        </nav>
    );
};

export default NavigationBar;