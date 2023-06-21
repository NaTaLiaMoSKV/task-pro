import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { logIn } from '../../redux/auth/operations';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import '../AuthPage/Auth.css'
import { useDispatch } from 'react-redux';

const initialValues = {
    email: '',
    password: '',
    showPassword: false
};

const validateForm = (values) => {
    const errors = {};
    
    if (!values.email) {
        errors.email = 'Enter your email';
        }
        
    if (!values.password) {
        errors.password = 'Enter your password';
    }

    return errors;
};


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }


    const onSubmit = (values,  { resetForm }) => {
        const { email, password } = values;
        dispatch(logIn({ email, password }));
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
                    <Field className='auth-form__field' type="email" id="email" name="email" placeholder='Enter your email' />
                    {/* <ErrorMessage name="email" component="div" /> */}
                </div>
                        
                <div style={{ position: 'relative' }}>
                    <Field className='auth-form__field' type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder='Confirm a password' />
                    <span  onClick={handleTogglePassword}>
                        {showPassword && <AiOutlineEyeInvisible className='auth-form__password-icon' />}
                        {!showPassword && <AiOutlineEye  className='auth-form__password-icon'/>}
                    </span>
                </div>

                <button className='auth-form__submit-btn' type="submit">Login now</button>
            </Form>
        </Formik>
           
    );
};
