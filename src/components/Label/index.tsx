import React from "react";
import "./label-styles.scss";

const variantClassMap: Record<string, string> = {
    "form-label": "form-label",
};

interface LabelProps {
    variant: keyof typeof variantClassMap;
    htmlFor: string;
    children: React.ReactNode;
};

const Label: React.FC<LabelProps> = ({ variant, htmlFor, children }) => {
    const className = `label ${variantClassMap[variant]}`;

    return (
        <label
            className={className}
            htmlFor={htmlFor}
        >
            {children}
        </label>
    );
};

export default Label;