import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Typography from "../Typography";
import Label from "../Label";
import Button from "../Button";
import Input from "../Input";
import "./signup-styles.scss";

const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup.string().required("Password is required").min(6, "Password must contain at least 6 characters"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match"),
});

const Signup: React.FC = () => {
    const {
        handleSubmit, 
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="signup">
            
        </div>
    );
};

export default Signup;