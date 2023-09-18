import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../Input';
import Typography from '../Typography';
import Button from '../Button';
import Label from '../Label';
import { Link } from 'react-router-dom';
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
                <Typography variant='trial-title'>
                    Start Your Free Trial
                </Typography>
                <Typography variant='trial-subtitle'>
                    Eperience the power of our product for free.
                </Typography>
            </header>
            <div className='trial-form'>
                <Typography variant='trial-title'>
                    Get started
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-group'>
                        <Label 
                            htmlFor='name'
                            variant=''
                        >
                            Name:
                        </Label>

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
                    </div>
                    {errors.name && (
                        <Typography variant='error-message'>
                            {errors.name.message}
                        </Typography>
                    )}

                    <div className='form-group'>
                        <Label 
                            variant=''
                            htmlFor='email'
                        >
                            Email:
                        </Label>

                        <Controller 
                        name='email'
                        control={control}
                        render={({ field }) => (
                            <Input 
                                type='text'
                                name='email'
                                placeholder='Email'
                                field={field}
                                variant=''
                                value={field.value}
                            />
                        )}
                    />
                    </div>
                    {errors.email && (
                        <Typography variant='error-message'>
                            {errors.email.message}
                        </Typography>
                    )}
                    
                    <div className='form-group'>
                        <Label
                            variant=''
                            htmlFor='password'
                        >
                            Password:
                        </Label>

                        <Controller 
                        name='password'
                        control={control}
                        render={({ field }) => (
                            <Input 
                                type='text'
                                name='password'
                                placeholder='Password'
                                field={field}
                                variant=''
                                value={field.value}
                            />
                        )}
                    />
                    </div>
                    {errors.password && (
                        <Typography variant='error-message'>
                            {errors.password.message}
                        </Typography>
                    )}

                    <Button
                        type='submit'
                        variant='LS-button'
                    >
                        Submit
                    </Button>
                </form>
            </div>

            <section className='trial-details'>
                <Typography variant='trial-title'>
                    What You Get
                </Typography>
                <ul>
                   <li>
                        Access to all premium features
                    </li>
                    <li>
                        14 days of unlimited usage
                    </li>
                    <li>
                       Personalized support 
                    </li>
                </ul>
            </section>

            <footer className='trial-footer'>
                <Typography variant='trial-subtitle'>
                    Have questions?
                    <Link to="/contact">
                        Contact us
                    </Link>
                </Typography>
            </footer>
        </div>
    );
};

export default StartYourTrial;