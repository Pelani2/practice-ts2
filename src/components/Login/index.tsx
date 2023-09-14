import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Typography from "../Typography";
import Label from "../Label";
import Button from "../Button";
import "./login-styles.scss";

const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters long"),
});

const Login: React.FC = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="login">
            <Typography variant="">
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
                        render={({ field }) => <input {...field} />}
                    />
                </div>
                <Typography variant="">
                        {errors.email?.message}
                </Typography>

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
                        render={({ field }) => <input {...field} />}
                    />
                    
                </div>
                <Typography variant="">
                        {errors.email?.message}
                </Typography>
                <Button
                    type="submit"
                    variant=""
                >
                    Submit
                </Button>
                {/* style the button and move on */}
            </form>
        </div>
    );
};

export default Login;