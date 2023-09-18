import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../Input';
import "./start-trial.scss";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is requried").email("Invalid email"),
    password: yup.string().required("Password is required"),
});

const StartYourTrial: React.FC = () => {
    const {
        handleSubmit, 
        control, 
        errors
    } = useForm({
        resolver: yupResolver(schema),
    });
};