import React from "react";
import "./input-styles.scss";

const variantClassMap: Record<string, string> = {
    "LS-input": "LS-input",
};

interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    field: {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
        value: string;
    }
    variant: keyof typeof variantClassMap;
    value: string;
}

const Input: React.FC<InputProps> = ({
    type,
    name,
    placeholder,
    field,
    variant,
}) => {
    const className = `input ${variantClassMap[variant]}`;

    return (
        <input 
            type={type}
            name={name}
            placeholder={placeholder}
            value={field.value || ""}
            onChange={field.onChange}
            onBlur={field.onBlur}
            className={className}
        />
    );
}

export default Input;