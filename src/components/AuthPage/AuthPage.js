import React from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import './Auth.css'

export default function AuthPage () {
  const { id } = useParams();

  return (
    <div className='welcome-wrapper'>
            <div className='modal'>
                <div className='modal-nav'>
                    <NavLink to="/auth/register" className='modal-nav__item' >Registration</NavLink>
                    <NavLink to="/auth/login" className='modal-nav__item' >Log In</NavLink>
                </div>
                {id === 'login' && <Login />}
                {id === 'register' && <Registration />}
            </div>
        </div>
  );
};