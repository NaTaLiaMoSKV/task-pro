import React from 'react';
import { Link } from 'react-router-dom'
import logoImage from '../../images/logo.png'
import iconImage from '../../images/welcome-icon.png'
import './WelcomePage.css';

const WelcomePage = () => {
    return (
    <div className='welcome-wrapper'>
        <div className='welcome'>
            <img className='welcome__icon' src={iconImage} alt='man with macbook' />
            <div className='welcome__logo'>
                <img className='welcome__logo-icon' src={logoImage} alt='logo' />
                <p className='welcome__logo-title'>Task Pro</p>
            </div>
            <p className='welcome__description'>Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!</p>
                {/* <button className='welcome__register-btn'>Registration</button> */}
                <Link className='welcome__register-btn' to="/auth/register">Registration</Link>
                <Link className='welcome__login-btn' to="/auth/login">Log In</Link>
            {/* <button className='welcome__login-btn'>Log In</button> */}
        </div>
    </div>
  );
};

export default WelcomePage;
