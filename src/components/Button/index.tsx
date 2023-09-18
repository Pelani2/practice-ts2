import React from "react";
import { Link } from "react-router-dom";
import "./button-styles.scss";

const buttonClassMap: Record<string, string> = {
    "login-button": "login-button",
    "signup-button": "signup-button",
    "cta-button": "cta-button",
    "submit-button": "submit-button",
    "trial-button": "trial-button",
};

interface ButtonProps {
    variant: keyof typeof buttonClassMap;
    children: React.ReactNode;
    type: "button" | "submit";
    onClick?: () => void;
    to?: string;
};

const Button: React.FC<ButtonProps> = ({ variant, children, type, onClick, to }) => {
    const className = `button ${buttonClassMap[variant]}`;

    if (to) {
        return (
            <Link
                to={to}
                className={className}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;