import React from "react";
import "./CP-styles.scss";

const variantClassMap: Record<string, string> = {
    "LS-CP-input": "LS-CP-input",
};

interface ConfirmPasswordInputProps {
  name: string;
  placeholder: string;
  field: any;
  variant: keyof typeof variantClassMap;
}

const ConfirmPasswordInput: React.FC<ConfirmPasswordInputProps> = ({
  name,
  placeholder,
  field,
  variant,
}) => {
    const className = `CP-input ${variantClassMap[variant]}`;

  return (
    <input
      type="password"
      name={name}
      placeholder={placeholder}
      {...field}
      className={className}
    />
  );
};

export default ConfirmPasswordInput;