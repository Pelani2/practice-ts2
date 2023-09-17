import React from "react";
import "./CP-styles.scss";

interface ConfirmPasswordInputProps {
  name: string;
  placeholder: string;
  field: any; 
}

const ConfirmPasswordInput: React.FC<ConfirmPasswordInputProps> = ({
  name,
  placeholder,
  field,
}) => {
  return (
    <input
      type="password"
      name={name}
      placeholder={placeholder}
      {...field}
    />
  );
};

export default ConfirmPasswordInput;