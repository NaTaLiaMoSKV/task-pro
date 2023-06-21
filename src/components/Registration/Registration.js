import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { register } from '../../redux/auth/operations';
import '../AuthPage/Auth.css'
import { useDispatch } from 'react-redux';

const initialValues = {
    name: '',
    email: '',
    password: '',
    showPassword: false
};

const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Enter your name';
    }

    if (!values.email) {
        errors.email = 'Enter your email';
        }
        
    if (!values.password) {
        errors.password = 'Enter your password';
    }

    return errors;
};


export default function Registration() {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }


    const onSubmit = (values,  { resetForm }) => {
        const { name, email, password } = values;
        
        dispatch(
            register({ name, email, password})
        );
        resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            validate={validateForm}
            onSubmit={onSubmit}
        >
            <Form className='auth-form'>
                <div>
                    <ErrorMessage className='auth-form__error-message' name="name" component="div" />
                    <Field className='auth-form__field' type="text" id="name" name="name" placeholder='Enter your name' />
                    </div>

                <div>
                    <ErrorMessage className='auth-form__error-message' name="email" component="div" />
                    <Field className='auth-form__field' type="email" id="email" name="email" placeholder='Enter your email' />
                </div>
                        
                <div style={{ position: 'relative' }}>
                    <ErrorMessage className='auth-form__error-message' name="password" component="div" />
                    <Field className='auth-form__field' type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder='Create a password' />
                    <span  onClick={handleTogglePassword}>
                        {showPassword && <AiOutlineEyeInvisible className='auth-form__password-icon' />}
                        {!showPassword && <AiOutlineEye  className='auth-form__password-icon'/>}
                    </span>
                </div>

                <button className='auth-form__submit-btn' type="submit">Register now</button>
            </Form>
        </Formik>
    );
};
