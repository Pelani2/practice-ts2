import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../Input';
import Typography from '../Typography';
import "./start-trial.scss";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is requried").email("Invalid email"),
    password: yup.string().required("Password is required"),
});

const StartYourTrial: React.FC = () => {
    const { handleSubmit, control, formState } = useForm({
        resolver: yupResolver(schema),
    });
    const { errors } = formState;

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className='start-trial'>
            <header className='start-trial__header'>
                <Typography variant=''>
                    Start Your Free Trial
                </Typography>
                <Typography variant=''>
                    Eperience the power of our product for free.
                </Typography>
            </header>
            <div className='trial-form'>
                <Typography variant=''>
                    Get started
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller 
                        name='name'
                        control={control}
                        render={({ field }) => (
                            <Input 
                                type='text'
                                name='name'
                                placeholder='Name'
                                field={field}
                                variant=''
                                value={field.value}
                            />
                        )}
                    />
                    {errors.name && (
                        <Typography variant='error-message'>
                            {errors.name.message}
                        </Typography>
                    )}
                </form>
            </div>
        </div>
    );
};

export default StartYourTrial;