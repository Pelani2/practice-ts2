import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Typography from "../Typography";
import Label from "../Label";
import Button from "../Button";
import Input from "../Input";
import "./login-styles.scss";

const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup.string().required("Password is required").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, "Invalid password"),
});

const Login: React.FC = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="login">
            <Typography variant="LS-title">
                Login
            </Typography>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="login-form"
            >
                <div className="form-group">
                    <Label
                        variant="form-label"
                        htmlFor="email"
                    >
                        Email:
                    </Label>
                    <Controller 
                        name="email"
                        control={control}
                        render={({ field }) => 
                        <Input 
                            variant="LS-input"
                            field={field}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={field.value}
                        />}
                    />
                </div>
                {errors.email && (
                    <Typography variant="error-message">
                        {errors.email?.message}
                    </Typography>
                )}

                <div className="form-group">
                    <Label
                        variant="form-label"
                        htmlFor="password"
                    >
                        Password:
                    </Label>
                    <Controller 
                        name="password"
                        control={control}
                        render={({ field }) => 
                            <Input 
                                variant="LS-input" 
                                field={field}
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={field.value}
                        />}
                    />
                </div>
                {errors.password && (
                    <Typography variant="error-message">
                        {errors.password?.message}
                    </Typography>
                )}
                
                <div className="button-wrapper">
                    <Button
                        type="submit"
                        variant="submit-button"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Login;