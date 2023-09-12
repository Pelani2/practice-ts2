import React from "react";
import "./button-styles.scss";

const buttonClassMap: Record<string, string> = {
    "login-button": "login-button",
    "signup-button": "signup-button",
    "cta-button": "cta-button",
};

interface ButtonProps {
    variant: keyof typeof buttonClassMap;
    children: React.ReactNode;
    type: "button" | "submit";
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ variant, children, type, onClick }) => {
    const className = `button ${buttonClassMap[variant]}`;

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