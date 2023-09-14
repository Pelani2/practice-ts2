import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";

const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters long"),
});