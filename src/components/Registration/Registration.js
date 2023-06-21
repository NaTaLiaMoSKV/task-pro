import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import '../AuthPage/Auth.css'

const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Name must be at least 2 characters').max(32, 'Name must be at most 32 characters').required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().trim().required('Password is required')
        .min(8, 'Password must be at least 8 characters').max(64, 'Password must be at most 64 characters')
        .matches( /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$!%*?&]+$/, 'Password must contain at least one uppercase letter, and one lowercase letter'
    ),
})

const initialValues = {
    name: '',
    email: '',
    password: '',
    showPassword: false
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
            validationSchema={validationSchema}
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
